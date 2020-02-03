import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IModalParams {
  children: JSX.Element;
  visible: boolean;
}

function Modal({ children, visible }: IModalParams) {
  if (!visible) return null;

  return (
    <div className={cx("modal-wrapper")}>
      <div className={cx("modal-body")}>{children}</div>
    </div>
  );
}

export default Modal;
