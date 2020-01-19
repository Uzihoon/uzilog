import { put, all, call, select } from "redux-saga/effects";
import * as api from "api";
import { IAction } from "./types";
import { RootState } from "store/redux";
import { IPost, IPostInfo } from "store/redux/post";

import * as StatusActions from "store/redux/status";
import * as PostActions from "store/redux/post";

const getPostDataFromStore = (state: RootState) => state.post;

export function* createPost(action: IAction<IPost>) {
  try {
    const { payload: body } = action;
    yield call(api.createPost, body);
    // TODO: Set notification
    alert("Post successfully");
  } catch (error) {
    console.error(error);
  }
}

export function* deletePost(action: IAction<string>) {
  try {
    const { payload: postId } = action;
    yield call(api.deletePost, postId);
    // TODO: Set notification
    alert("Delete successfully");
  } catch (error) {
    console.error(error);
  }
}

export function* updatePost(action: IAction<IPostInfo>) {
  try {
    const { postId, body } = action.payload;
    yield call(api.updatePost, postId, body);
    //TODO: set notification
    alert("Update Successfully");
    yield all([
      put(PostActions.setStore({ key: "edit", value: null })),
      put(PostActions.setStore({ key: "editInfo", value: null }))
    ]);
  } catch (error) {
    console.error(error);
  }
}

export function* getPost(action: IAction<string>) {
  try {
    const { payload: postId } = action;
    yield put(StatusActions.setPending());
    const postStore = yield select(getPostDataFromStore);
    const list = postStore.list as IPost[];
    let post = list.find(l => l.postId === postId);

    if (list.length <= 0 || !post) {
      post = yield call(api.getPost, postId);
    }

    yield put(PostActions.setStore({ key: "post", value: post }));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(StatusActions.setFinish());
  }
}

export function* getList() {
  try {
    yield put(StatusActions.setPending());
    const data = yield call(api.getList);
    yield put(PostActions.setStore({ key: "list", value: data }));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(StatusActions.setFinish());
  }
}
