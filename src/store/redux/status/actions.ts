import { createAction } from "typesafe-actions";

export const SET_PENDING = "status/SET_PENDING";
export const SET_FINISH = "status/SET_FINISH";

export const setPending = createAction(SET_PENDING)();
export const setFinish = createAction(SET_FINISH)();
