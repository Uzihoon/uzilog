import React from "react";
import styles from "./Empty.module.scss";
import classNames from "classnames/bind";
import Logo from "components/Logo";

const cx = classNames.bind(styles);

function Empty() {
  return (
    <div className={cx("empty-wrapper")}>
      <Logo />
      <div className={cx("text")}>Sorry, There is no data</div>
    </div>
  );
}

export default Empty;
