import React from "react";
import styles from "./Template.module.scss";
import classNames from "classnames/bind";
import Header from "components/Template/Header";
import Footer from "components/Template/Footer";

const cx = classNames.bind(styles);

interface ITemplateProps {
  children: JSX.Element;
}

function Template({ children }: ITemplateProps) {
  return (
    <div className={cx("template-wrapper")}>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default Template;
