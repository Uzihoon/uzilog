import React, { useRef, useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import classNames from "classnames/bind";
import Typed from "typed.js";

import { useStatusGet } from "hooks/lib";

const cx = classNames.bind(styles);

function Intro() {
  const [hidden, setHidden] = useState(false);
  const [none, setNone] = useState(false);
  const loading = useStatusGet("loading") as boolean;
  let typed: any | null;
  let wrapper: HTMLDivElement | null;

  useEffect(() => {
    if (loading) {
      setNone(false);
      setTimeout(() => setLoading(), 100);
    } else {
      setTimeout(() => setNone(true), 2300);
      setHidden(true);
    }
  }, [loading]);

  const setLoading = () => {
    if (!wrapper) return;

    wrapper.innerHTML = "";

    const options = {
      strings: ["<div class='type'>UZILOG<span class='dot'/></div>"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50
      // loop: true
    };
    typed = new Typed("#typho", options);
  };

  if (none) return <div style={{ display: "none" }} />;

  return (
    <div
      ref={r => (wrapper = r)}
      className={cx("intro-wrapper", hidden && "hidden")}
      id="typho"
    />
  );
}

export default Intro;
