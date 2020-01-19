import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type PostAction = ActionType<typeof actions>;

export type PostState = {
  list: IPost[];
  post: IPost | null;
  edit: string | null;
  editInfo: IPost | null;
};

export interface IPost {
  content: string;
  title: string;
  desc?: string;
  tag: string;
  date: string;
  postId: string;
}

export interface ISetStore {
  key: string;
  value: any;
}

export interface IPostInfo {
  postId: string;
  body: IPost;
}

export type PostKey = "list" | "post" | "editInfo" | "edit";
