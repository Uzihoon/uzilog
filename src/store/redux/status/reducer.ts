import { StatusState, StatusAction } from './types';
import { createReducer } from 'typesafe-actions';
import { SET_PENDING, SET_FINISH, SET_STATUS, SET_THEME } from './actions';

const initialState: StatusState = {
  loading: true,
  admin: null,
  theme: 'light',
};

const status = createReducer<StatusState, StatusAction>(initialState, {
  [SET_PENDING]: (state: StatusState, action) => {
    return { ...state, loading: true };
  },
  [SET_FINISH]: (state: StatusState, action) => {
    return { ...state, loading: false };
  },
  [SET_STATUS]: (state: StatusState, action) => {
    const { key, value } = action.payload;
    const k = key as keyof StatusState;
    return { ...state, [k]: value };
  },
  [SET_THEME]: (state: StatusState, action) => {
    return { ...state, theme: action.payload };
  },
});

export default status;
