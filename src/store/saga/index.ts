import { all, takeLatest } from "redux-saga/effects";

import * as StatusActions from "store/redux/status";
import * as StatusSaga from "./status";

export default function* rootSaga() {
  yield all([handleStatus()]);
}

function* handleStatus() {
  yield takeLatest(StatusActions.getList, StatusSaga.getList);
  yield takeLatest(StatusActions.setPost, StatusSaga.setPost);
  yield takeLatest(StatusActions.checkAdmin, StatusSaga.checkAdmin);
  yield takeLatest(StatusActions.logout, StatusSaga.logout);
  yield takeLatest(StatusActions.login, StatusSaga.login);
  yield takeLatest(StatusActions.posting, StatusSaga.posting);
}
