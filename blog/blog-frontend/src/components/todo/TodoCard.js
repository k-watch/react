import React from 'react';
import styled, { css } from 'styled-components';

const StyledTodoCard = css`
  ${(props) =>
    props.todo &&
    css`
      border: 1px solid #ffe1ff;
    `}

  ${(props) =>
    props.doing &&
    css`
      border: 1px solid #d0edf0;
    `}

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #d2ffd0;
    `}
`;

const TodoCardWrap = styled.div`
  ${StyledTodoCard}

  min-width: 200px;
  padding: 4px;
  margin-top: 10px;

  .title {
    font-size: 0.9rem !important;
  }

  .sub-title-wrap {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: #a5a5a5;
  }
`;

const TodoCard = (params) => {
  debugger;
  return (
    <TodoCardWrap {...params}>
      <p className="title">{params.title}</p>
      <div className="sub-title-wrap">
        <p>{params.username}</p>
        <p>({params.rank})</p>
      </div>
    </TodoCardWrap>
  );
};

export default TodoCard;
