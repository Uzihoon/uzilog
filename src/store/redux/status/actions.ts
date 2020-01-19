import { createAction } from "typesafe-actions";
import { ISetStateKey, ILoginParam } from "./types";

export const SET_PENDING = "status/SET_PENDING";
export const SET_FINISH = "status/SET_FINISH";
export const SET_STATUS = "state/SET_STATUS";
export const CHECK_ADMIN = "state/CHECK_ADMIN";
export const LOGIN = "state/LOGIN";
export const LOGOUT = "state/LOGOUT";

export const setPending = createAction(SET_PENDING)();
export const setFinish = createAction(SET_FINISH)();
export const setStatus = createAction(SET_STATUS)<ISetStateKey>();
export const checkAdmin = createAction(CHECK_ADMIN)<any>();
export const login = createAction(LOGIN)<ILoginParam>();
export const logout = createAction(LOGOUT)<any>();
