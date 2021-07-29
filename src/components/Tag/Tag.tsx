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
    const emptyField = Object.values(tagForm).filter(tag => !tag);
    if (emptyField.length > 0) {
      alert('Fill tag form');
      return;
    }

    tagActions.onCreateTag(tagForm);
  };

  return (
    <div>
      <h1>Tag List</h1>
      <div>
        {tagList.map(tag => (
          <div key={tag.tagId} style={{ color: tag.color }}>
            {tag.text}
          </div>
        ))}
      </div>
      <h1>Add Tag</h1>
      <input
        type='text'
        name='tagId'
        placeholder='Tag ID'
        className={cx('input')}
        onChange={handleForm}
      />
      <input
        type='text'
        name='text'
        placeholder='Tag Name'
        className={cx('input')}
        onChange={handleForm}
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
