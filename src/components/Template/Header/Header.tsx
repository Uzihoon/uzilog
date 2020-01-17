import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Logo from "components/Logo";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header-wrapper")}>
      <Logo />
    </div>
  );
}

export default Header;
