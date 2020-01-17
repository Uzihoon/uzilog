import React, { useState } from "react";
import styles from "./Write.module.scss";
import classNames from "classnames/bind";
import ReactMarkdown from "react-markdown";

const cx = classNames.bind(styles);

function Write() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
  };

  return (
    <div className={cx("write-container")}>
      <div className={cx("header")}>
        <input placeholder="Title" />
        <div className={cx("save")}>Save</div>
      </div>
      <div className={cx("content")}>
        <div className={cx("write")}>
          <textarea onChange={handleChange} />
        </div>
        <div className={cx("preview")}>
          <ReactMarkdown source={text} />
        </div>
      </div>
    </div>
  );
}

export default Write;
