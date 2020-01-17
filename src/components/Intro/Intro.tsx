import React, { useRef, useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import classNames from "classnames/bind";
import Typed from "typed.js";

const cx = classNames.bind(styles);

function Intro() {
  const [hidden, setHidden] = useState(false);
  const wrapper = useRef(null);
  let typed;

  useEffect(() => {
    setTimeout(() => setHidden(true), 2500);
  }, []);

  useEffect(() => {
    if (!wrapper) return;
    const options = {
      strings: ["<div class='type'>UZILOG<span class='dot'/></div>"],
      typeSpeed: 80,
      backSpeed: 50
    };
    typed = new Typed("#typho", options);
  }, [wrapper]);

  if (hidden) return <div style={{ display: "none" }} />;

  return <div className={cx("intro-wrapper")} id="typho" />;
}

export default Intro;
