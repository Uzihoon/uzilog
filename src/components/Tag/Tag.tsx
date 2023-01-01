import React, { useState } from 'react';
import styles from './Tag.module.scss';
import classNames from 'classnames/bind';
import { useTagGet } from 'hooks/lib';
import { ColorResult, SketchPicker } from 'react-color';
import useTagActions from 'hooks/tag/useTagActions';

const cx = classNames.bind(styles);

function Tag() {
  const [tagForm, setTagForm] = useState({ tagId: '', text: '', color: '' });
  const tagList = useTagGet('tagList');

  const tagActions = useTagActions();

  const handleChangeColor = ({ hex }: ColorResult) => {
    setTagForm({ ...tagForm, color: hex });
  };

  const handleForm = ({ target: { name, value } }: any) => {
    setTagForm({ ...tagForm, [name]: value });
  };

  const onSubmit = () => {
    const emptyField = Object.values(tagForm).filter((tag) => !tag);
    if (emptyField.length > 0) {
      alert('Fill tag form');
      return;
    }

    tagActions.onCreateTag(tagForm);
  };

  return (
    <div>
      <h1>Tag List</h1>
      <div className={cx('tag-box')}>
        <div className={cx('tag-bg-dark')}>
          <h2>Dark Theme</h2>
          {tagList.map((tag) => (
            <div key={tag.tagId} style={{ color: tag.color }}>
              {tag.text}
            </div>
          ))}
        </div>
        <div className={cx('tag-bg-light')}>
          <h2>Light Theme</h2>
          {tagList.map((tag) => (
            <div key={tag.tagId} style={{ color: tag.color }}>
              {tag.text}
            </div>
          ))}
        </div>
      </div>

      <h1>Add Tag</h1>
      <input
        type='text'
        name='tagId'
        placeholder='Tag ID'
        className={cx('input')}
        onChange={handleForm}
        style={{ display: 'inline' }}
      />
      <input
        type='text'
        name='text'
        placeholder='Tag Name'
        className={cx('input')}
        onChange={handleForm}
        style={{ display: 'inline' }}
      />
      <SketchPicker
        onChangeComplete={handleChangeColor}
        color={tagForm.color}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Tag;
