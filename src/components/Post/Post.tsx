import React, { useEffect, useState } from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import ReactMarkdown from "react-markdown";
import Code from "components/Code";
import { useParams, useHistory } from "react-router";
import moment from "moment";
import Empty from "components/Empty";

import { useTagGet, usePostGet } from "hooks/lib";
import { ITagList } from "store/redux/tag";
import usePostActions from "hooks/post/usePostActions";
import { IPostBucket, IPost } from "store/redux/post";

const cx = classNames.bind(styles);

function Post() {
  const [targetPost, setTargetPost] = useState<IPost | null>(null);
  const tagList = useTagGet("tagList") as ITagList;
  const post = usePostGet("post") as IPostBucket;
  const postActions = usePostActions();
  const param = useParams() as { id: string };
  const history = useHistory();

  useEffect(() => {
    if (!param.id) {
      history.push("/");
      return;
    }
    const id = param.id;

    if (!post[id]) {
      postActions.onGetPost(param.id);
    } else {
      setTargetPost(post[id]);
    }
  }, []);

  useEffect(() => {
    if (!post[param.id]) return;
    setTargetPost(post[param.id]);
  }, [post[param.id]]);

  if (!targetPost) return <Empty />;

  return (
    <div className={cx("post-wrapper")}>
      <div className={cx("header")}>
        <div className={cx("desc-box")}>
          <div className={cx("tag", targetPost.tag)}>
            {tagList[targetPost.tag].text}
          </div>
          <div className={cx("date")}>
            {moment(targetPost.date).format("YYYY-MM-DD")}
          </div>
        </div>
        <div className={cx("post-title")}>
          <span>{targetPost.title}</span>
        </div>
      </div>
      <div className={cx("content")}>
        <ReactMarkdown source={targetPost.content} renderers={{ code: Code }} />
      </div>
    </div>
  );
}

export default Post;
