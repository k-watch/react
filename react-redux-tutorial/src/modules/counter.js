import { createAction, handleActions } from "redux-actions"

const INCREASE = 'counter/increase'
const DECREASE = 'counter/decrease'

// export const increase = () => ({type: INCREASE})
// export const decrease = () => ({type: DECREASE})

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initState = {
    number: 0
}

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
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initState
)

export default counter