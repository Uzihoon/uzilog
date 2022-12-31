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
    state.loading = true;
    return state;
  },
  [SET_FINISH]: (state: StatusState, action) => {
    state.loading = false;
    return state;
  },
  [SET_STATUS]: (state: StatusState, action) => {
    const { key, value } = action.payload;
    const k = key as keyof StatusState;
    (state[k] as any) = value;
    return state;
  },
  [SET_THEME]: (state: StatusState, action) => {
    state.theme = action.payload;
    return state;
  },
});

export default status;
