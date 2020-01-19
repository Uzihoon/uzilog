import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type StatusAction = ActionType<typeof actions>;

export type StatusState = {
  loading: boolean;
  admin: boolean | null;
};

export interface ISetStateKey {
  key: string;
  value: any;
}

export type StatusKey = "loading" | "admin";

export interface ILoginParam {
  email: string;
  password: string;
}
