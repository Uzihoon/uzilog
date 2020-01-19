import { PostState, PostAction } from "./types";
import { createReducer } from "typesafe-actions";
import { SET_STORE } from "./actions";

const initialState: PostState = {
  list: [],
  post: null,
  edit: null,
  editInfo: null
};

const status = createReducer<PostState, PostAction>(initialState, {
  [SET_STORE]: (state: PostState, action) => {
    const { key, value } = action.payload;
    const k = key as keyof PostState;
    (state[k] as any) = value;
    return state;
  }
});

export default status;
