import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as todoAPI from '../lib/api/todo';

const CHANGE_FIELD = 'todo/CHANGE_FIELD';
const INIT_FORM = 'todo/INIT_FORM';
const [INSERT, INSERT_SUCCESS, INSERT_FAILURE] = createRequestActionTypes(
  'todo/INSERT',
);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initForm = createAction(INIT_FORM);
export const insert = createAction(
  INSERT,
  ({ todo, username, rank, type }) => ({
    todo,
    username,
    rank,
    type,
  }),
);

const initState = {
  todo: '',
  username: '',
  rank: 0,
  type: 1,
  error: null,
};

const insertSaga = createRequestSaga(INSERT, todoAPI.insert);
export function* todoSaga() {
  yield takeLatest(INSERT, insertSaga);
}

const todo = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INIT_FORM]: (state) => ({
      ...state,
      todo: '',
      username: '',
      rank: 0,
      type: 1,
    }),
    [INSERT_SUCCESS]: (state) => ({
      ...state,
    }),
    [INSERT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default todo;
