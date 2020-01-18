import React, { useState } from "react";

export default function useWrite() {
  const [text, setText] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [tag, setTag] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setText(value);
  };

  const handleHeader = (key: string, value: string) => {
    switch (key) {
      case "title":
        setTitle(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "tag":
        setTag(value);
        break;
    }
  };

  const handlePublish = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!title || !text) return;
  };

  return {
    val: { text, desc, title },
    event: { handleChange, handleHeader, handlePublish }
  };
}
