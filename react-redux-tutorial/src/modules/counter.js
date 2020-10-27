import { createAction, handleActions } from "redux-actions"
import { delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'
const INCREASE_SAGA = 'counter/INCREASE_SAGA'
const DECREASE_SAGA = 'counter/DECREASE_SAGA'


// export const increase = () => ({type: INCREASE})
// export const decrease = () => ({type: DECREASE})

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)
export const increaseAsync = createAction(INCREASE_SAGA, () => undefined)
export const decreaseAsync = createAction(DECREASE_SAGA, () => undefined)

function* increaseSaga() {
    yield delay(1000)
    yield put(increase())
    const number = yield select(state => state.counter)
    console.log(`현재 값은 ${number}입니다.`)
}

function* decreaseSaga() {
    yield delay(1000)
    yield put(decrease())
}

export function* counterSaga() {
    yield takeEvery(INCREASE_SAGA, increaseSaga)
    yield takeLatest(DECREASE_SAGA, decreaseSaga)
}

const initState = 0

// function counter(state = initState, action) {
// switch (action.type) {
// case INCREASE:
// return { number: state.number + 1 }
// case DECREASE:
// return { number: state.number - 1 }
// default:
// return state
// }
// }

const counter = handleActions(
    {
        [INCREASE]: (state, action) => state + 1,
        [DECREASE]: (state, action) => state - 1
    },
    initState
)

export default counter