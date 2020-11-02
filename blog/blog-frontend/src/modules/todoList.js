import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as todoAPI from '../lib/api/todo';

const [
  LIST_TODOS,
  LIST_TODOS_SUCCESS,
  LIST_TODOS_FAILURE,
] = createRequestActionTypes('todoList/LIST_TODOS');

export const listTodos = createAction(LIST_TODOS);

const listTodosSaga = createRequestSaga(LIST_TODOS, todoAPI.list);
export function* todoListSaga() {
  yield takeLatest(LIST_TODOS, listTodosSaga);
}

const initState = {
  todos: null,
  error: null,
};

const todoList = handleActions(
  {
    [LIST_TODOS_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
    [LIST_TODOS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default todoList;
