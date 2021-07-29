import { ISetStore, ITag } from './types';
import { createAction } from 'typesafe-actions';

export const SET_DATA = 'tag/SET_DATA';
export const GET_TAGS = 'tag/GET_TAGS';
export const CREATE_TAG = 'tag/CREATE_TAG';

export const setData = createAction(SET_DATA)<ISetStore>();
export const getTags = createAction(GET_TAGS)();
export const createTag = createAction(CREATE_TAG)<ITag>();
