import React from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import Logo from "components/Logo";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("login-wrapper")}>
      <div className={cx("login-box")}>
        <div className={cx("header")}>
          <Logo />
        </div>
        <div className={cx("desc")}>Welcome to UZILOG Please login</div>
        <form>
          <div className={cx("item")}>
            <label htmlFor="inp" className={cx("inp")}>
              <input id="inp" placeholder="&nbsp;" />
              <span className={cx("label")}>Email</span>
              <span className={cx("border")}></span>
            </label>
          </div>
          <div className={cx("item")}>
            <label htmlFor="inp" className={cx("inp")}>
              <input id="inp" type="password" placeholder="&nbsp;" />
              <span className={cx("label")}>Password</span>
              <span className={cx("border")}></span>
            </label>
          </div>
          <div className={cx("button-box")}>
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
