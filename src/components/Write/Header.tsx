import React, { useState } from "react";
import styles from "./Write.module.scss";
import classNames from "classnames/bind";
import Logo from "components/Logo";

import { useTagGet } from "hooks/lib";
import { ITagList } from "store/redux/tag";
import useStatusActions from "hooks/status/useStatusActions";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const menu = [
  {
    title: "Title",
    id: "title"
  },
  {
    title: "Description",
    id: "desc"
  },
  {
    title: "Tags",
    id: "tag"
  }
];

interface IHeaderProps {
  value: {
    title: string | undefined;
    desc: string | undefined;
  };
  onPublish: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onChange: (a: string, b: string) => void;
}

function Header({ value, onChange, onPublish }: IHeaderProps) {
  const [current, setCurrent] = useState("title");
  const tagList = useTagGet("tagList") as ITagList;
  const statusActions = useStatusActions();
  const history = useHistory();

  const handleClick = (id: string) => {
    setCurrent(id);
  };

  const handleChange = (e: any, type: string) => {
    const value = e.target.value;
    onChange(type, value);
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id;
    onChange("tag", value);
  };

  const handleLogout = () => {
    statusActions.onLogout(history);
  };

  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("menu-box")}>
        <div className={cx("menu-wrapper")}>
          <Logo />
          {menu.map(m => (
            <div
              className={cx("menu", current === m.id && "select")}
              onClick={() => handleClick(m.id)}
              key={m.id}
            >
              {m.title}
            </div>
          ))}
        </div>
        <div className={cx("button-box")}>
          <div className={cx("publish-wrapper")} onClick={onPublish}>
            <div className={cx("publish")}>Publish</div>
          </div>
          <div className={cx("publish-wrapper")} onClick={handleLogout}>
            <div className={cx("publish")}>Logout</div>
          </div>
        </div>
      </div>
      <div className={cx("content-box")}>
        {current === "title" && (
          <div className={cx("title-box")}>
            <input
              placeholder="Title"
              value={value.title}
              name="title"
              onChange={e => handleChange(e, "title")}
            />
          </div>
        )}
        {current === "desc" && (
          <div className={cx("title-box")}>
            <textarea
              value={value.desc}
              placeholder="Description"
              onChange={e => handleChange(e, "desc")}
            />
          </div>
        )}
        {current === "tag" && (
          <div className={cx("tag-box")}>
            {Object.keys(tagList).map(tag => (
              <label htmlFor={tag} className={cx("radio")} key={tag}>
                <input
                  type="radio"
                  name="tag"
                  id={tag}
                  onChange={handleRadio}
                  className={cx("hidden")}
                />
                <span className={cx("label")} />
                <span className={tag}>{tagList[tag].text}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
