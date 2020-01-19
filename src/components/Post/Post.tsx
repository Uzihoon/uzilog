import React, { useEffect } from "react";
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
import { IPost } from "store/redux/post";

const cx = classNames.bind(styles);

function Post() {
  const tagList = useTagGet("tagList") as ITagList;
  const post = usePostGet("post") as IPost | null;
  const postActions = usePostActions();
  const param = useParams() as { id: string };
  const history = useHistory();

  useEffect(() => {
    if (!param.id) {
      history.push("/");
      return;
    }
    postActions.onGetPost(param.id);
  }, []);

  if (!post) return <Empty />;

  return (
    <div className={cx("post-wrapper")}>
      <div className={cx("header")}>
        <div className={cx("desc-box")}>
          <div className={cx("tag", post.tag)}>{tagList[post.tag].text}</div>
          <div className={cx("date")}>
            {moment(post.date).format("YYYY-MM-DD")}
          </div>
        </div>
        <div className={cx("post-title")}>
          <span>{post.title}</span>
        </div>
      </div>
      <div className={cx("content")}>
        <ReactMarkdown source={post.content} renderers={{ code: Code }} />
      </div>
    </div>
  );
}

export default Post;
