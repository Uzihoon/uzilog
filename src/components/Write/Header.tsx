import React, { useState } from 'react';
import styles from './Write.module.scss';
import classNames from 'classnames/bind';
import Logo from 'components/Logo';
import ConfirmModal from 'components/ConfirmModal';

import { useTagGet } from 'hooks/lib';
import { ITagList } from 'store/redux/tag';
import useStatusActions from 'hooks/status/useStatusActions';
import { useHistory } from 'react-router';
import usePostActions from 'hooks/post/usePostActions';

const cx = classNames.bind(styles);

const menu = [
  {
    title: 'Title',
    id: 'title'
  },
  {
    title: 'Description',
    id: 'desc'
  },
  {
    title: 'Tags',
    id: 'tag'
  }
];

interface IHeaderProps {
  value: {
    title: string | undefined;
    desc: string | undefined;
    tag: string | undefined;
  };
  onPublish: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onChange: (a: string, b: string) => void;
}

function Header({ value, onChange, onPublish }: IHeaderProps) {
  const [current, setCurrent] = useState('title');
  const [confirm, setConfirm] = useState(false);
  const tagList = useTagGet('tagList');
  const statusActions = useStatusActions();
  const history = useHistory();
  const postActions = usePostActions();

  const handleClick = (id: string) => {
    setCurrent(id);
  };

  const handleChange = (e: any, type: string) => {
    const value = e.target.value;
    onChange(type, value);
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id;
    onChange('tag', value);
  };

  const handleLogout = () => {
    statusActions.onLogout(history);
  };

  const onGoBack = () => {
    setConfirm(true);
  };

  const onConfirm = () => {
    postActions.onDeleteTemp();
    history.push('/');
  };

  return (
    <div className={cx('header-wrapper')}>
      <div className={cx('menu-box')}>
        <div className={cx('menu-wrapper')}>
          <Logo disable={true} onClick={onGoBack} />
          {menu.map(m => (
            <div
              className={cx('menu', current === m.id && 'select')}
              onClick={() => handleClick(m.id)}
              key={m.id}
            >
              {m.title}
            </div>
          ))}
        </div>
        <div className={cx('button-box')}>
          <div className={cx('publish-wrapper')} onClick={onPublish}>
            <div className={cx('publish')}>Publish</div>
          </div>
          <div className={cx('publish-wrapper')} onClick={handleLogout}>
            <div className={cx('publish')}>Logout</div>
          </div>
        </div>
      </div>
      <div className={cx('content-box')}>
        {current === 'title' && (
          <div className={cx('title-box')}>
            <input
              placeholder='Title'
              value={value.title}
              name='title'
              onChange={e => handleChange(e, 'title')}
            />
          </div>
        )}
        {current === 'desc' && (
          <div className={cx('title-box')}>
            <textarea
              value={value.desc}
              placeholder='Description'
              onChange={e => handleChange(e, 'desc')}
            />
          </div>
        )}
        {current === 'tag' && (
          <div className={cx('tag-box')}>
            {tagList.map(tag => (
              <label htmlFor={tag.tag} className={cx('radio')} key={tag.tag}>
                <input
                  type='radio'
                  name='tag'
                  id={tag.tag}
                  onChange={handleRadio}
                  checked={tag.tag === value.tag}
                  className={cx('hidden')}
                />
                <span className={cx('label')} />
                <span className={tag.tag}>{tag.text}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <ConfirmModal
        visible={confirm}
        onConfirm={onConfirm}
        onCancel={() => setConfirm(false)}
        content='Are you sure want to go back to main?'
      />
    </div>
  );
}

export default Header;
