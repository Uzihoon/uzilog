import { combineReducers } from "redux";
import status from "./status";
import tag from "./tag";
import post from "./post";

const rootReducer = combineReducers({
  status,
  tag,
  post
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
