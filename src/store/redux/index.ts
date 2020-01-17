import { combineReducers } from "redux";
import status from "./status";
import tag from "./tag";

const rootReducer = combineReducers({
  status,
  tag
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
