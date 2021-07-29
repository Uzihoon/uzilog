import { all, fork, takeLatest } from 'redux-saga/effects';

import * as StatusActions from 'store/redux/status';
import * as PostActions from 'store/redux/post';
import * as TagActions from 'store/redux/tag';

import * as StatusSaga from './status';
import * as PostSaga from './post';
import * as TagSaga from './tag';

export default function* rootSaga() {
  yield all([fork(handleStatus), fork(handlePost), fork(handleTag)]);
}

function* handleStatus() {
  yield takeLatest(StatusActions.checkAdmin, StatusSaga.checkAdmin);
  yield takeLatest(StatusActions.logout, StatusSaga.logout);
  yield takeLatest(StatusActions.login, StatusSaga.login);
}

function* handlePost() {
  yield takeLatest(PostActions.createPost, PostSaga.createPost);
  yield takeLatest(PostActions.getList, PostSaga.getList);
  yield takeLatest(PostActions.getPost, PostSaga.getPost);
  yield takeLatest(PostActions.deletePost, PostSaga.deletePost);
  yield takeLatest(PostActions.updatePost, PostSaga.updatePost);
  yield takeLatest(PostActions.setEdit, PostSaga.setEdit);
  yield takeLatest(PostActions.deleteTemp, PostSaga.deleteTemp);
}

function* handleTag() {
  yield takeLatest(TagActions.getTags, TagSaga.getTags);
  yield takeLatest(TagActions.createTag, TagSaga.createTag);
}
