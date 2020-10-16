import React, { useReducer } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({ name: '', nickname: '' })
    const { name, nickname } = state

    return (
        <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
            <div>이름: {name}</div>
            <div>닉네임: {nickname}</div>
        </div>
    );
};

export default Info;