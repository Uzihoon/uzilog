import { call, put, select } from "redux-saga/effects";
import { API, Auth } from "aws-amplify";

import * as StatusActions from "store/redux/status";
import { RootState } from "store/redux";
import { IList, ILoginParam } from "store/redux/status";

interface IAction<T> {
  payload: T;
}

const getStatusDataFromStore = (state: RootState) => state.status;

export function* getList() {
  try {
    yield put(StatusActions.setPending());
    const data = yield call(get);
    yield put(StatusActions.setStatus({ key: "list", value: data }));
    yield put(StatusActions.setFinish());
  } catch (error) {
    console.error(error);
  }
}

async function get(id?: string) {
  let url = "/uzilog";
  if (id) url = `/uzilog/${id}`;
  const data = await API.get("uzilog", url, null);
  return data;
}

export function* setPost(action: IAction<string>) {
  yield put(StatusActions.setPending());
  try {
    const { payload: postId } = action;
    const status = yield select(getStatusDataFromStore);
    const list = status.list as IList[];
    let post = list.find(l => l.postId === postId);

    if (list.length <= 0 || !post) {
      const data = yield call(get, postId);
      post = data;
    }

    yield put(StatusActions.setStatus({ key: "post", value: post }));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(StatusActions.setFinish());
  }
}

export function* checkAdmin(action: IAction<any>) {
  const { payload: history } = action;
  try {
    const data = yield call(checkSession);
    yield put(StatusActions.setStatus({ key: "admin", value: true }));
    history.push(history.location.pathname);
  } catch (error) {
    yield put(StatusActions.setStatus({ key: "admin", value: false }));
  } finally {
    yield put(StatusActions.setFinish());
  }
}

function checkSession() {
  const data = Auth.currentSession();
  return data;
}

export function* logout(action: IAction<any>) {
  try {
    const { payload: history } = action;
    yield call(signOut);
    history.push("/");
  } catch (error) {
    console.error(error);
  }
}

export function* login(action: IAction<ILoginParam>) {
  try {
    const { email, password } = action.payload;
    yield call(signIn, email, password);
    yield put(StatusActions.setStatus({ key: "admin", value: true }));
  } catch (error) {
    console.error(error);
  }
}

function signIn(email: string, password: string) {
  const data = Auth.signIn(email, password);

  return data;
}

function signOut() {
  const data = Auth.signOut();
  return data;
}

export function* posting(action: IAction<any>) {
  try {
    const { payload: body } = action;
    const data = yield call(post, body);
  } catch (error) {
    console.error(error);
  }
}

async function post(body: any) {
  const data = await API.post("uzilog", "/uzilog", { body });
  return data;
}
