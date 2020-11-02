import React from 'react';
import styled from 'styled-components';

// 할일 등록 폼

const TodoFormWrap = styled.div``;

const StyledInput = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid #b0dafb;
  outline: none;
  &:placeholder {
    font-size: 0.7rem;
    color: #d8d8d8;
  }
`;

const TodoForm = () => {
  return (
    <TodoFormWrap>
      <StyledInput
        autoComplete="todo"
        name="todo"
        placeholder="24자까지 등록 가능합니다."
      />
    </TodoFormWrap>
  );
};

export default TodoForm;
