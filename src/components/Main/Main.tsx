import React, { useEffect, useMemo, useState } from 'react';

import moment from 'moment';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Component
import ConfirmModal from 'components/ConfirmModal';
import ListInFeed from 'components/GoogleAd/ListInFeed';

// Reducer
import { useTagGet, useStatusGet, usePostGet } from 'hooks/lib';
import usePostActions from 'hooks/post/usePostActions';
import { IAd, PostList, Type } from 'store/redux/post';

const cx = classNames.bind(styles);

const initial = [...Array(5)];

function Main() {
  const [visible, setVisible] = useState(false);
  const [tempId, setTempId] = useState<string | null>(null);
  const [postList, setPostList] = useState<PostList>([]);

  const tagList = useTagGet('tagList');
  const dataList = usePostGet('list');
  const postActions = usePostActions();
  const admin = useStatusGet('admin');
  const history = useHistory();
  const adItem: IAd = useMemo(() => ({ type: Type.AD }), []);

  useEffect(() => {
    if (dataList.length <= 0) {
      postActions.onGetList();
    }
  }, []);

  useEffect(() => {
    const newPostList: PostList = [];

    dataList
      .sort((a, b) => b.createdAt - a.createdAt)
      .forEach((list, index) => {
        if (index && index % 3 === 0) {
          newPostList.push(adItem);
        }
        newPostList.push(list);
      });

    setPostList(newPostList);
  }, [dataList, adItem]);

  const handleDelete = () => {
    if (!tempId) return;
    postActions.onDeletePost(tempId);
    setVisible(false);
  };

  const handleCancel = () => {
    setTempId(null);
    setVisible(false);
  };

  const confirmDelete = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    postId: string
  ) => {
    e.preventDefault();
    setVisible(true);
    setTempId(postId);
  };

  const handleUpdate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    postId: string
  ) => {
    e.preventDefault();
    const editInfo = dataList.find((data) => data.postId === postId);
    if (!editInfo) return;
    postActions.onSetEdit(postId);
    history.push('/uzihoon/admin/write');
  };
  return (
    <div className={cx('main-wrapper')}>
      <Helmet prioritizeSeoTags>
        <title>UZILOG</title>
      </Helmet>
      {(!postList || postList.length === 0) &&
        initial.map((_, idx) => (
          <div key={idx} className={cx('loading-list')}>
            <div className={cx('loading-tag-box')}>
              <div className={cx('loading', 'loading-tag')}></div>
              <div className={cx('loading', 'loading-date')}></div>
            </div>
            <div className={cx('loading', 'loading-header')} />
            <div className={cx('loading', 'loading-desc')} />
          </div>
        ))}
      {postList.map((t, idx) =>
        t.type === 'ad' ? (
          <div className={cx('list', 'ad-list')} key={idx}>
            <ListInFeed />
          </div>
        ) : (
          <Link to={`/post/${t.postId}`} className={cx('list')} key={t.postId}>
            <div className={cx('header')}>
              <div className={cx('tag')}>
                <div
                  className={cx('tag-title')}
                  style={{
                    color: tagList.find((tag) => tag.tagId === t.tag)?.color,
                  }}
                >
                  {tagList.find((tag) => tag.tagId === t.tag)?.text}
                </div>
                {admin && (
                  <>
                    <div
                      className={cx('action')}
                      onClick={(e) => handleUpdate(e, t.postId)}
                    >
                      EDIT
                    </div>
                    <div
                      className={cx('action')}
                      onClick={(e) => confirmDelete(e, t.postId)}
                    >
                      DELETE
                    </div>
                  </>
                )}
              </div>
              <div className={cx('date')}>
                {moment(t.createdAt).format('YYYY-MM-DD')}
              </div>
            </div>
            <div className={cx('title')}>
              <span className={cx('text')}>{t.title}</span>
            </div>
            <div className={cx('content')}>
              <span className={cx('text')}>{t.desc}</span>
            </div>
          </Link>
        )
      )}
      {visible && (
        <ConfirmModal
          onCancel={handleCancel}
          visible={visible}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Main;
