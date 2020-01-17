import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TagAction = ActionType<typeof actions>;

export type TagState = {
  tagList: ITagList;
};

export type TagKey = "tagList";

export interface ITagList {
  [P: string]: { text: string };
}
