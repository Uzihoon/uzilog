import { createAction } from "typesafe-actions";

export const HELLO = "status/HELLO";

export const hello = createAction(HELLO)();
