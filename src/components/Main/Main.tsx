import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import classNames from "classnames/bind";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import Empty from "components/Empty";

// Reducer
import { useTagGet, useStatusGet } from "hooks/lib";
import { ITagList } from "store/redux/tag";
import { IList } from "store/redux/status";
import useStatusActions from "hooks/status/useStatusActions";

const cx = classNames.bind(styles);

function Main() {
  const tagList = useTagGet("tagList") as ITagList;
  const dataList = useStatusGet("list") as IList[];
  const statusActions = useStatusActions();
  const admin = useStatusGet("admin") as boolean;
  const history = useHistory();

  useEffect(() => {
    if (dataList.length <= 0) {
      statusActions.onGetList();
    }
  }, []);

  const handleDelete = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    postId: string
  ) => {
    e.preventDefault();
    statusActions.onDelete({ history, postId });
  };

  const handleUpdate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    postId: string
  ) => {
    e.preventDefault();
    const editInfo = dataList.find(data => data.postId === postId);
    if (!editInfo) return;
    statusActions.onSetStatus({ key: "edit", value: postId });
    statusActions.onSetStatus({ key: "editInfo", value: editInfo });
    history.push("/uzihoon/admin/write");
  };

  if (dataList.length <= 0) return <Empty />;
  return (
    <div className={cx("main-wrapper")}>
      {dataList.map(t => (
        <Link to={`/post/${t.postId}`} className={cx("list")} key={t.postId}>
          <div className={cx("header")}>
            <div className={cx("tag")}>
              <div className={cx("tag-title", t.tag)}>
                {tagList[t.tag].text}
              </div>
              {admin && (
                <>
                  <div
                    className={cx("action")}
                    onClick={e => handleUpdate(e, t.postId)}
                  >
                    EDIT
                  </div>
                  <div
                    className={cx("action")}
                    onClick={e => handleDelete(e, t.postId)}
                  >
                    DELETE
                  </div>
                </>
              )}
            </div>
            <div className={cx("date")}>
              {moment(t.date).format("YYYY-MM-DD")}
            </div>
          </div>
          <div className={cx("title")}>
            <span className={cx("text")}>{t.title}</span>
          </div>
          <div className={cx("content")}>
            <span className={cx("text")}>{t.desc}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Main;
