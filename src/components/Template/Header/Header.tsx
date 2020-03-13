import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Logo from "components/Logo";
import Menu from "components/Template/Menu";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header-wrapper")}>
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
