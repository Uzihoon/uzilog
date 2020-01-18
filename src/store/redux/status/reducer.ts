import { StatusState, StatusAction } from "./types";
import { createReducer } from "typesafe-actions";
import { SET_PENDING, SET_FINISH, SET_STATUS } from "./actions";

const initialState: StatusState = {
  loading: true,
  list: [],
  post: null,
  admin: null
};

const status = createReducer<StatusState, StatusAction>(initialState, {
  [SET_PENDING]: (state: StatusState, action) => {
    state.loading = true;
    return state;
  },
  [SET_FINISH]: (state: StatusState, action) => {
    state.loading = false;
    return state;
  },
  [SET_STATUS]: (state: StatusState, action) => {
    const { key, value } = action.payload;
    const k = key as keyof StatusState;
    state[k] = value;
    return state;
  }
});

export default status;
