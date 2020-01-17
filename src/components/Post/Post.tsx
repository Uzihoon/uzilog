import React from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Post() {
  return (
    <div className={cx("post-wrapper")}>
      <div className={cx("header")}>
        <div className={cx("tag")}>Typescript</div>
        <div className={cx("post-title")}>Text</div>
        <div className={cx("date")}>2019-09-09</div>
      </div>
      <div className={cx("content")}>bla bla bla</div>
    </div>
  );
}

export default Post;
