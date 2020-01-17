import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-wrapper")}>
      © 2020 Uzihoon All rights reserved
    </div>
  );
}

export default Footer;
