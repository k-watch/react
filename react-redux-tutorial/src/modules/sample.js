import { handleActions } from 'redux-actions'
import * as api from '../lib/api'

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'

export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST }) // 요청 시작
    try {
        const res = await api.getPost(id)
        // 요청 성공
        dispatch({
            type: GET_POST_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        // 요청 실패
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        })
        throw e
    }
}

const initState = {
    loading: {
        GET_POST: false,
    },
    post: null,
}

const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false,
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, aciton) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false,
            }
        }),
    },
    initState
)

export default sample