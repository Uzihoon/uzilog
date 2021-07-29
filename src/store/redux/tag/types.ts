import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TagAction = ActionType<typeof actions>;

export type TagState = {
  tagList: ITag[];
};

export type TagKey = 'tagList';

export interface ITag {
  tagId: string;
  text: string;
  color: string;
}

export interface ISetStore {
  key: string;
  value: any;
}
