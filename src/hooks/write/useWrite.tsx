import React, { useState } from "react";
import useStatusActions from "hooks/status/useStatusActions";

export default function useWrite() {
  const [content, setContent] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [tag, setTag] = useState();
  const statusActions = useStatusActions();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setContent(value);
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
    if (!title || !content || !tag) return;
    const body = { title, content, tag, desc };
    statusActions.onPosting(body);
  };

  return {
    val: { content, desc, title },
    event: { handleChange, handleHeader, handlePublish }
  };
}
