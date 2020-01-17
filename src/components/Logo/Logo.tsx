import React from "react";
import styles from "./Logo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Logo() {
  return (
    <div className={cx("logo-box")}>
      <div className={cx("logo-text")}>UZILOG</div>
      <div className={cx("logo-icon")} />
    </div>
  );
}

export default Logo;
