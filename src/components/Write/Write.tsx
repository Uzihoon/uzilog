import React, { useState, useRef } from "react";
import styles from "./Write.module.scss";
import classNames from "classnames/bind";

// Reducer
import useWrite from "hooks/write/useWrite";

// Component
import ReactMarkdown from "react-markdown";
import Header from "components/Write/Header";
import Code from "components/Code";

const cx = classNames.bind(styles);

function Write() {
  const { val, event } = useWrite();
  const writeRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: string) => {
    if (id === "write") {
      const scrollTop = writeRef.current!.scrollTop;
      previewRef.current!.scrollTop = scrollTop;
    } else {
      const scrollTop = previewRef.current!.scrollTop;
      writeRef.current!.scrollTop = scrollTop;
    }
  };

  return (
    <div className={cx("write-container")}>
      <Header
        value={val}
        onChange={event.handleHeader}
        onPublish={event.handlePublish}
      />
      <div className={cx("content")}>
        <div className={cx("write")} onScroll={() => handleScroll("write")}>
          <textarea onChange={event.handleChange} ref={writeRef} />
        </div>
        <div
          className={cx("preview")}
          ref={previewRef}
          onScroll={() => handleScroll("preview")}
        >
          <ReactMarkdown source={val.text} renderers={{ code: Code }} />
        </div>
      </div>
    </div>
  );
}

export default Write;
