import React from "react";
import styles from "./ConfirmModal.module.scss";
import classNames from "classnames/bind";
import Modal from "components/Modal";

const cx = classNames.bind(styles);

interface IConfirmModalParams {
  visible: boolean;
  content?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

function ConfirmModal({
  content,
  visible,
  onCancel,
  onConfirm
}: IConfirmModalParams) {
  return (
    <Modal visible={visible}>
      <div className={cx("confirm-wrapper")}>
        <div className={cx("content")}>
          {content || "Are you sure want to delete ?"}
        </div>
        <div className={cx("footer")}>
          <span className={cx("button", "confirm")} onClick={onConfirm}>
            Confirm
          </span>
          <span className={cx("button", "cancel")} onClick={onCancel}>
            Cancel
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
