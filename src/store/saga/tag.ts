import { call, put } from '@redux-saga/core/effects';
import { ITag } from 'store/redux/tag';
import { IAction } from './types';
import * as api from 'api';
import * as TagActions from 'store/redux/tag';

export function* getTags(): any {
  try {
    const data = yield call(api.getTags);
    yield put(TagActions.setData({ key: 'tagList', value: data }));
  } catch (e) {
    console.error(e);
  }
}

export function* createTag(action: IAction<ITag>) {
  try {
    const { payload: body } = action;
    yield call(api.createTag, body);
    alert('Create tag successfully!');
  } catch (e) {
    console.error(e);
  }
}
