import React, { useState, useEffect } from "react";
import usePostActions from "hooks/post/usePostActions";
import { usePostGet } from "hooks/lib";
import { IPost } from "store/redux/post";
import { s3Upload } from "libs/awsLib";
import { Storage } from "aws-amplify";

export default function useWrite() {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string | undefined>("");
  const [tag, setTag] = useState("javascript");
  const [tempImg, setTempImg] = useState<string[]>([]);
  const postActions = usePostActions();
  const edit = usePostGet("edit") as string | null;
  const editInfo = usePostGet("editInfo") as IPost;

  const handleUnmount = (img: string[]) => {
    console.log(img);
  };

  useEffect(() => {
    return () => handleUnmount(tempImg);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setContent(value);
  };

  const handleImg = async (img: File | null) => {
    if (!img) return;
    const src = await s3Upload(img);
    const url = await Storage.vault.get(src);
    setContent(content + `![](${url})`);
    setTempImg(tempImg.concat([src]));
    console.log(tempImg.concat([src]));
  };

  const handleDrop = (event: React.DragEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const fileList = event.dataTransfer.files;
    const images = [...fileList]
      .filter(file => file.type.indexOf("image") >= 0)
      .map(handleImg);
    console.log(tempImg);
  };

  useEffect(() => {
    if (!editInfo) return;
    setContent(editInfo.content);
    setTitle(editInfo.title);
    setTag(editInfo.tag);
    setDesc(editInfo.desc);

    return () => {
      postActions.onSetStore({ key: "editInfo", value: null });
    };
  }, [editInfo]);

  const onReset = () => {
    setContent("");
    setTitle("");
    setDesc("");
    setTag("javascript");
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
    const body = { title, content, tag, desc } as IPost;
    if (edit) {
      postActions.onUpdatePost({ postId: edit, body });
    } else {
      postActions.onCreatePost(body);
    }

    onReset();
  };

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    const images = [...items]
      .filter(item => item.type.indexOf("image") >= 0)
      .map(img => img.getAsFile())
      .map(handleImg);
  };

  return {
    val: { content, desc, title, tag },
    event: {
      handleChange,
      handleDrop,
      handleHeader,
      handlePublish,
      handlePaste
    }
  };
}
