import { createAction } from 'typesafe-actions';
import { ISetStore, IPost, IPostInfo } from './types';

export const GET_LIST = 'post/GET_LIST';
export const DELETE_POST = 'post/DELETE_POST';
export const UPDATE_POST = 'post/UPDATE_POST';
export const CREATE_POST = 'post/CREATE_POST';
export const SET_STORE = 'post/SET_STORE';
export const GET_POST = 'post/GET_POST';
export const SET_EDIT = 'post/SET_EDIT';
export const DELETE_TEMP = 'post/DELETE_TEMP';
export const GET_TAGS = 'post/GET_TAGS';

export const getList = createAction(GET_LIST)();
export const deletePost = createAction(DELETE_POST)<string>();
export const updatePost = createAction(UPDATE_POST)<IPostInfo>();
export const createPost = createAction(CREATE_POST)<IPost>();
export const setStore = createAction(SET_STORE)<ISetStore>();
export const getPost = createAction(GET_POST)<string>();
export const setEdit = createAction(SET_EDIT)<string>();
export const deleteTemp = createAction(DELETE_TEMP)();
export const getTags = createAction(GET_TAGS)();
