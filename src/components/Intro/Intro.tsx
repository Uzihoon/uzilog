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
  const wrapper = useRef(null);
  let typed;

  useEffect(() => {
    if (loading) {
      setLoading();
    } else {
      setTimeout(() => setNone(true), 2500);
      setHidden(true);
    }
  }, [loading]);

  const setLoading = () => {
    if (!wrapper) return;

    setNone(false);
    const options = {
      strings: ["<div class='type'>UZILOG<span class='dot'/></div>"],
      typeSpeed: 80,
      backSpeed: 50
    };
    typed = new Typed("#typho", options);
  };

  if (none) return <div style={{ display: "none" }} />;

  return <div className={cx("intro-wrapper", hidden && "hidden")} id="typho" />;
}

export default Intro;
