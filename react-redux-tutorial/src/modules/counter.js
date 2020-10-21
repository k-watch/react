const INCREASE = 'counter/increase'
const DECREASE = 'counter/decrease'

export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const initState = {
    number: 0
}

function counter(state = initState, action) {
    switch (action.type) {
        case INCREASE:
            return { number: state.number + 1 }
        case DECREASE:
            return { number: state.number - 1 }
        default:
            return state
    }
}

export default counter