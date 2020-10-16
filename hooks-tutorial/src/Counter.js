import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREASE':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 })

    return (
        <div>
            <span>현재 카운터 값은 <b>{state.value}</b>입니다.</span>
            <br />
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
        </div>
    );
};

export default Counter;