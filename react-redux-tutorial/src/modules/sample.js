import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';
import createRequestThunk from '../lib/createRequestThunk';
import { finishLoading, startLoading } from './loading';

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id => id)
export const getUsers = createAction(GET_USERS)

const getPostSaga = createRequestSaga(GET_POST, api.getPost)
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers)

// export const getPost = createRequestThunk(GET_POST, api.getPost)
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers)

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga)
    yield takeLatest(GET_USERS, getUsersSaga)
}

const initState = {
    post: null,
    users: null,
}

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        })
    }, initState
)

export default sample