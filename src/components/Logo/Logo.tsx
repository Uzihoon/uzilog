import React from "react";
import styles from "./Logo.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface ILogoProps {
  disable?: boolean;
  onClick?: () => void;
}

function Logo({ disable, onClick }: ILogoProps) {
  if (disable) {
    return (
      <div className={cx("logo-box")} onClick={onClick}>
        <div className={cx("logo-text")}>UZILOG</div>
        <div className={cx("logo-icon")} />
      </div>
    );
  }

  return (
    <Link to="/" className={cx("logo-box")}>
      <div className={cx("logo-text")}>UZILOG</div>
      <div className={cx("logo-icon")} />
    </Link>
  );
}

export default Logo;
