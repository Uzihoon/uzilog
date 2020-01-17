import React from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import ReactMarkdown from "react-markdown";

import { useTagGet } from "hooks/lib";
import { ITagList } from "store/redux/tag";

const cx = classNames.bind(styles);

const data = {
  title:
    "TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST",
  tag: "javascript",
  date: "20180909",
  id: 4444,
  content: " ```javascript \n console.log()\n ```"
};

function Post() {
  const tagList = useTagGet("tagList") as ITagList;

  return (
    <div className={cx("post-wrapper")}>
      <div className={cx("header")}>
        <div className={cx("desc-box")}>
          <div className={cx("tag", data.tag)}>{tagList[data.tag].text}</div>
          <div className={cx("date")}>{data.date}</div>
        </div>
        <div className={cx("post-title")}>
          <span>{data.title}</span>
        </div>
      </div>
      <div className={cx("content")}>
        <ReactMarkdown source={data.content} />
      </div>
    </div>
  );
}

export default Post;
