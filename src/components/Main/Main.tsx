import React from "react";
import styles from "./Main.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const test = [
  {
    title: "TEST",
    content: "Test...",
    date: "20180909",
    id: 4444,
    tag: "avc"
  }
];

for (let i = 0; i < 30; i++) {
  test.push({
    title: "TEST",
    content: "Test...",
    date: "20180909",
    id: i,
    tag: "abc"
  });
}

function Main() {
  return (
    <div className={cx("main-wrapper")}>
      {test.map(t => (
        <div className={cx("list")} key={t.id}>
          <div className={cx("header")}>
            <div className={cx("tag")}>{t.tag}</div>
            <div className={cx("date")}>{t.date}</div>
          </div>
          <div className={cx("title")}>
            <div className={cx("text")}>{t.title}</div>
          </div>
          <div className={cx("content")}>{t.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Main;
