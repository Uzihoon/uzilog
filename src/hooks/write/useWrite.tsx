import React, { useState, useEffect } from "react";
import usePostActions from "hooks/post/usePostActions";
import { usePostGet } from "hooks/lib";
import { IPost } from "store/redux/post";

export default function useWrite() {
  const [content, setContent] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [tag, setTag] = useState();
  const postActions = usePostActions();
  const edit = usePostGet("edit") as string | null;
  const editInfo = usePostGet("editInfo") as IPost;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setContent(value);
  };

  useEffect(() => {
    if (!edit) return;
    setContent(editInfo.content);
    setTitle(editInfo.title);
    setTag(editInfo.tag);
    setDesc(editInfo.desc);
  }, [edit]);

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
    const body = { title, content, tag, desc } as IPost;
    if (edit) {
      postActions.onUpdatePost({ postId: edit, body });
    } else {
      postActions.onCreatePost(body);
    }
  };

  return {
    val: { content, desc, title },
    event: { handleChange, handleHeader, handlePublish }
  };
}
