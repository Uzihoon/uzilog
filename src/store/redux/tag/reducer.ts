import { TagState, TagAction } from "./types";
import { createReducer } from "typesafe-actions";

const initialState: TagState = {
  tagList: {
    javascript: {
      text: "Javascript"
    },
    typescript: {
      text: "Typescript"
    }
  }
};

const status = createReducer<TagState, TagAction>(initialState, {});

export default status;
