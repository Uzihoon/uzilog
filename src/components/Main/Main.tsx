import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';

// Component
import Empty from 'components/Empty';
import ConfirmModal from 'components/ConfirmModal';
import MetaTags from 'react-meta-tags';

// Reducer
import { useTagGet, useStatusGet, usePostGet } from 'hooks/lib';
import usePostActions from 'hooks/post/usePostActions';
import { IPost } from 'store/redux/post';

const cx = classNames.bind(styles);

function Main() {
  const [visible, setVisible] = useState(false);
  const [tempId, setTempId] = useState<string | null>(null);
  const tagList = useTagGet('tagList');
  const dataList = usePostGet('list') as IPost[];
  const postActions = usePostActions();
  const admin = useStatusGet('admin') as boolean;
  const history = useHistory();

  useEffect(() => {
    if (dataList.length <= 0) {
      postActions.onGetList();
    }
  }, []);

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
    const editInfo = dataList.find(data => data.postId === postId);
    if (!editInfo) return;
    postActions.onSetEdit(postId);
    history.push('/uzihoon/admin/write');
  };
  // if (dataList.length <= 0) return <Empty />;
  return (
    <div className={cx('main-wrapper')}>
      <MetaTags>
        <title>UZILOG</title>
      </MetaTags>
      {dataList
        .sort((a, b) => b.createdAt - a.createdAt)
        .map(t => (
          <Link to={`/post/${t.postId}`} className={cx('list')} key={t.postId}>
            <div className={cx('header')}>
              <div className={cx('tag')}>
                <div
                  className={cx('tag-title')}
                  style={{
                    color: tagList.find(tag => tag.tagId === t.tag)?.color
                  }}
                >
                  {tagList.find(tag => tag.tagId === t.tag)?.text}
                </div>
                {admin && (
                  <>
                    <div
                      className={cx('action')}
                      onClick={e => handleUpdate(e, t.postId)}
                    >
                      EDIT
                    </div>
                    <div
                      className={cx('action')}
                      onClick={e => confirmDelete(e, t.postId)}
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
        ))}
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
