import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import TodoHeader from './TodoHeader';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';

// 할일 등록 폼
const TodoFormWrap = styled.div`
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
`;

const TodoInsertWrap = styled.div`
  width: 320px;
  padding: 0 50px 50px;
  color: #88d0d9;
  .title,
  .sub-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .title {
    font-size: 1.5rem;
  }

  .sub-title {
    line-height: 1.3rem;
  }

  ul {
    display: flex;

    li {
      margin-right: 20px;
    }
  }
`;

const StyledTitle = styled.div`
  font-size: 0.8rem;
  color: #bae4e9;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding-bottom: 6px;
  border-bottom: 1px solid #bae4e9;
  outline: none;
  margin-bottom: 30px;
  &::placeholder {
    font-size: 0.8rem;
    color: #e2e2e2;
  }
`;

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  appearance: none;
  background: red;
  width: 0.6rem;
  height: 0.6rem;
  background: white;
  border-radius: 100%;
  margin: 0px 2px;
  border: 1px solid #e2e2e2;
  outline: none;

  &:checked {
    background-color: #bae4e9;
  }

  + label {
    font-size: 0.8rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
`;

const ranks = [1, 2, 3];

const TodoInsertForm = ({ form, onChange, onSelect, onReset, onSubmit }) => {
  return (
    <TodoFormWrap>
      <form onSubmit={onSubmit}>
        <TodoHeader onReset={onReset} />
        <TodoInsertWrap>
          <div className="title">할 일을 등록해보세요!!!</div>
          <div className="sub-title">
            여러가지 할 일을 쉽게 등록해보세요! <br />
            우선순위와 등록날짜를 통해 손쉽게 할 일을 관리 가능합니다!
          </div>
          <StyledTitle>할 일</StyledTitle>
          <StyledInput
            autoComplete="todo"
            name="todo"
            onChange={onChange}
            value={form.todo}
            placeholder="24자까지 등록 가능합니다."
          />

          <StyledTitle>사용자</StyledTitle>
          <StyledInput
            autoComplete="username"
            name="username"
            onChange={onChange}
            value={form.username}
            placeholder="홍길동"
          />

          <StyledTitle>우선순위</StyledTitle>
          <ul>
            {ranks.map((rank) => (
              <li key={rank} onClick={() => onSelect(rank)}>
                {form.rank === rank ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                <label>{rank}순위</label>
              </li>
            ))}
          </ul>

          <ButtonWithMarginTop fullWidth blue>
            등록
          </ButtonWithMarginTop>
        </TodoInsertWrap>
      </form>
    </TodoFormWrap>
  );
};

export default React.memo(TodoInsertForm);
