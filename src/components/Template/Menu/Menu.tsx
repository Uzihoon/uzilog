import React from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IMenuProps {}

function Menu({}: IMenuProps) {
  return (
    <div className={cx("menu-wrapper")}>
      {/* <div className={cx("icon")}>
        <a href="https://github.com/Uzihoon" target="_blank">
          Github
        </a>
      </div>
      <div className={cx("icon")}>
        <a href="https://daeunyoon.com" target="_blank">
          EUN
        </a>
      </div> */}
    </div>
  );
}

export default Menu;
