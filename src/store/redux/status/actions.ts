import { createAction } from "typesafe-actions";
import { ISetStateKey, ILoginParam, IDeleteParam, IPostParam } from "./types";

export const SET_PENDING = "status/SET_PENDING";
export const SET_FINISH = "status/SET_FINISH";
export const GET_LIST = "state/GET_LIST";
export const SET_STATUS = "state/SET_STATUS";
export const SET_POST = "state/SET_POST";
export const CHECK_ADMIN = "state/CHECK_ADMIN";
export const LOGIN = "state/LOGIN";
export const LOGOUT = "state/LOGOUT";
export const POSTING = "state/POSTING";
export const DELETE_POST = "state/DELETE_POST";
export const POST_UPDATE = "state/POST_UPDATE";

export const setPending = createAction(SET_PENDING)();
export const setFinish = createAction(SET_FINISH)();
export const getList = createAction(GET_LIST)();
export const setStatus = createAction(SET_STATUS)<ISetStateKey>();
export const setPost = createAction(SET_POST)<string>();
export const checkAdmin = createAction(CHECK_ADMIN)<any>();
export const login = createAction(LOGIN)<ILoginParam>();
export const logout = createAction(LOGOUT)<any>();
export const posting = createAction(POSTING)<any>();
export const deletePost = createAction(DELETE_POST)<IDeleteParam>();
export const postUpdate = createAction(POST_UPDATE)<IPostParam>();
