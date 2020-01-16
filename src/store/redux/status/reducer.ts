import { StatusState, StatusAction } from "./types";
import { createReducer } from "typesafe-actions";

const initialState: StatusState = {};

const status = createReducer<StatusState, StatusAction>(initialState, {});

export default status;
