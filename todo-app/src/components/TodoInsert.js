import React, { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md'
import styled from 'styled-components';

const TodoStyle = styled.form`
    display: flex;
    background: #495057;
    input {
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;
        &::placeholder {
            color: #dee2e6;
        }
        flex: 1;
    }
    button {
        background: none;
        outline: none;
        border: none;
        background: #868e96;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.1s background ease-in;
        &:hover {
            background: #adb5bd;
        }
    }
`

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('')

    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(e => {
        onInsert(value)
        setValue('')
        e.preventDefault();
    }, [onInsert, value])

    return (
        <TodoStyle onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
            <button type="summit"><MdAdd /></button>
        </TodoStyle>
    );
};

export default TodoInsert;