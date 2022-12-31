import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type StatusAction = ActionType<typeof actions>;

export type Theme = 'light' | 'dark';

export type StatusState = {
  loading: boolean;
  admin: boolean | null;
  theme: Theme;
};

export interface ISetStateKey {
  key: string;
  value: any;
}

export type StatusKey = keyof StatusState;

export interface ILoginParam {
  email: string;
  password: string;
}
