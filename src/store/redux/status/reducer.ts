import { StatusState, StatusAction } from "./types";
import { createReducer } from "typesafe-actions";
import { SET_PENDING, SET_FINISH } from "./actions";

const initialState: StatusState = {
  loading: true
};

const status = createReducer<StatusState, StatusAction>(initialState, {
  [SET_PENDING]: (state: StatusState, action) => {
    state.loading = false;
    return state;
  },
  [SET_FINISH]: (state: StatusState, action) => {
    state.loading = true;
    return state;
  }
});

export default status;
