import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter'

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter number={number} increase={increaseAsync} decrease={decreaseAsync} />
    );
};

export default connect(
    (state) => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync,
    }
)(CounterContainer);