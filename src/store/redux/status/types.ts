import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type StatusAction = ActionType<typeof actions>;

export type StatusState = {
  loading: boolean;
};

export type StatusKey = "loading";
