import { call, put } from 'redux-saga/effects';
import { IAction } from './types';
import * as StatusActions from 'store/redux/status';
import { ILoginParam } from 'store/redux/status';
import * as api from 'api';

export function* checkAdmin(): any {
  try {
    yield call(api.checkSession);
    yield put(StatusActions.setStatus({ key: 'admin', value: true }));
  } catch (error) {
    yield put(StatusActions.setStatus({ key: 'admin', value: false }));
  } finally {
    yield put(StatusActions.setFinish());
  }
}

export function* logout(action: IAction<any>) {
  try {
    const { payload: history } = action;
    yield call(api.signOut);
    history.push('/');
  } catch (error) {
    console.error(error);
  }
}

export function* login(action: IAction<ILoginParam>) {
  try {
    const { email, password } = action.payload;
    yield call(api.signIn, email, password);
    yield put(StatusActions.setStatus({ key: 'admin', value: true }));
  } catch (error) {
    console.error(error);
  }
}
