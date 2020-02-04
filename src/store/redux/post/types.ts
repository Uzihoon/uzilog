import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type PostAction = ActionType<typeof actions>;

export type PostState = {
  list: IPost[];
  post: IPostBucket;
  edit: string | null;
  editInfo: IPost | null;
  tempImg: Promise<string | undefined>[];
};

export interface IPostBucket {
  [P: string]: IPost;
}

export interface IPost {
  content: string;
  title: string;
  desc?: string;
  tag: string;
  createdAt: number;
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

export type PostKey = "list" | "post" | "editInfo" | "edit" | "tempImg";
