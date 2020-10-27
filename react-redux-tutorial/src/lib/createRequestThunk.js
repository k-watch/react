import { finishLoading, startLoading } from "../modules/loading"

export default function createRequestThunk(type, req) {
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`

    return params => async dispatch => {
        dispatch({ type })
        dispatch(startLoading(type))
        try {
            const res = await req(params)
            dispatch({
                type: SUCCESS,
                payload: res.data
            })
            dispatch(finishLoading(type))
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            })
            dispatch(startLoading(type))
            throw e
        }
    }
}

//createRequestThunk(GET_USRS, api.getPost)