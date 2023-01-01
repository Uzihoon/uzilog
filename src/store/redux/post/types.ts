import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostAction = ActionType<typeof actions>;

export type PostState = {
  list: IPost[];
  post: IPostBucket;
  edit: string | null;
  editInfo: IPost | null;
  tempImg: Promise<string | undefined>[];
};

export enum Type {
  POST = 'post',
  AD = 'ad',
}

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
  type?: Type.POST;
}

export interface ISetStore {
  key: string;
  value: any;
}

export interface IAd {
  type: Type.AD;
}

export interface IPostInfo {
  postId: string;
  body: IPost;
}

export type PostKey = keyof PostState;

export type PostList = Array<IPost | IAd>;
