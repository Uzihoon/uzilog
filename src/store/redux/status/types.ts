import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type StatusAction = ActionType<typeof actions>;

export type StatusState = {
  loading: boolean;
  list: IList[];
  post: IList | null;
  admin: boolean | null;
  edit: string | null;
  editInfo: IList | null;
};

export interface IList {
  content: string;
  title: string;
  desc?: string;
  tag: string;
  date: string;
  postId: string;
}

export interface ISetStateKey {
  key: string;
  value: any;
}

export type StatusKey =
  | "loading"
  | "edit"
  | "editInfo"
  | "list"
  | "post"
  | "admin";

export interface ILoginParam {
  email: string;
  password: string;
}

export interface IDeleteParam {
  postId: string;
  history: any;
}

export interface IPostParam {
  postId: string;
  body: any;
}
