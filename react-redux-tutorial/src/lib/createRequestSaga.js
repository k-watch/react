import { call, put } from "redux-saga/effects"
import { finishLoading, startLoading } from "../modules/loading"

export default function createRequestSaga(type, req) {
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`

    return function* (action) {
        yield put(startLoading(type))

        try {
            const res = yield call(req, action.payload)
            yield put({
                type: SUCCESS,
                paylaod: res.data
            })
        } catch (e) {
            yield put({
                type: FAILURE,
                paylaod: e,
                error: true
            })
        }
        yield put(finishLoading(type))
    }
}