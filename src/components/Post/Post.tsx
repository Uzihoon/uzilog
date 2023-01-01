import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';

import moment from 'moment';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';

import Code from 'components/Code';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

import Giscus from '@giscus/react';

import { useTagGet, usePostGet, useStatusGet } from 'hooks/lib';
import usePostActions from 'hooks/post/usePostActions';
import { IPost } from 'store/redux/post';
import configure from 'config';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const loadingContentSizes = [
  'lg',
  'sm',
  'md',
  'sm',
  'md',
  'md',
  'lg',
  'sm',
  'lg',
  'md',
  'md',
  'sm',
  'md',
  'lg',
];

function Post() {
  const [targetPost, setTargetPost] = useState<IPost | null>(null);
  const [postId, setPostId] = useState<string | null>(null);
  const tagList = useTagGet('tagList');
  const post = usePostGet('post');
  const postActions = usePostActions();
  const param = useParams() as { id: string };
  const history = useHistory();
  const theme = useStatusGet('theme');

  const getPost = (id: string) => {
    if (!post[id]) {
      postActions.onGetPost(id);
    } else {
      setTargetPost(post[id]);
    }
    goToTop();
  };

  const goToTop = () => window.scrollTo(0, 0);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!param.id) {
      history.push('/');
      return;
    }
    const id = param.id;
    getPost(id);
    setPostId(id);

    const unlisten = history.listen((location) => {
      const pathList = location.pathname
        .split('/')
        .filter((path) => path !== '');
      if (pathList.length < 2) return;
      const id = pathList[1];
      getPost(id);
    });

    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    if (!post[param.id]) return;
    setTargetPost(post[param.id]);
  }, [param.id, post]);

  if (!targetPost) {
    return (
      <div>
        <div className={cx('header')}>
          <div className={cx('loading-head')}>
            <div className={cx('loading', 'loading-tag')} />
            <div className={cx('loading', 'loading-date')} />
          </div>
          <div className={cx('loading', 'loading-title')} />
          <div className={cx('loading', 'loading-desc')} />
        </div>
        {loadingContentSizes.map((size, index) => (
          <div
            key={index}
            className={cx('loading', `loading-box-${size}`)}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className={cx('post-wrapper')}>
      <Helmet prioritizeSeoTags>
        <title>{`UZILOG - ${targetPost.title}`}</title>
        <meta property='og:title' content={targetPost.title} />
        <meta property='og:description' content={targetPost.desc} />
        <meta name='description' content={targetPost.desc} />
        <meta
          property='og:url'
          content={`https://uzihoon.com/post/${param.id}`}
        />
      </Helmet>
      <div className={cx('header')}>
        <div className={cx('desc-box')}>
          <div
            className={cx('tag', targetPost.tag)}
            style={{
              color: tagList.find((tag) => tag.tagId === targetPost.tag)?.color,
            }}
          >
            {tagList.find((tag) => tag.tagId === targetPost.tag)?.text}
          </div>
          <div className={cx('date')}>
            {moment(targetPost.createdAt).format('YYYY-MM-DD')}
          </div>
        </div>
        <div className={cx('post-title')}>
          <span>{targetPost.title}</span>
        </div>
        <div className={cx('post-desc')}>
          <span>{targetPost.desc}</span>
        </div>
      </div>
      <div className={cx('content')}>
        <ReactMarkdown
          children={targetPost.content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <Code language={match[1]} value={children} />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      {postId && (
        <div className={cx('comment')}>
          <Giscus
            id={configure.giscus.id}
            repo={`${configure.giscus.github}/${configure.giscus.repo}`}
            repoId={configure.giscus.repoId}
            category={configure.giscus.category}
            categoryId={configure.giscus.categoryId}
            mapping='pathname'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme={theme}
            lang='en'
          />
        </div>
      )}
    </div>
  );
}

export default Post;
