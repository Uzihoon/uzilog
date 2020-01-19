import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-wrapper")}>
      <a href="https://github.com/Uzihoon">
        © 2020 Uzihoon All rights reserved
      </a>
    </div>
  );
}

export default Footer;
