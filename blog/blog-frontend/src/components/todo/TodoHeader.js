import React from 'react';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';
import { MdClear } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TodoHeaderWrap = styled.div`
  display: flex;
  background: white;
  padding: 10px;

  font-size: 2rem;

  .back-icon {
    cursor: pointer;
    color: #bae4e9;
    &:hover {
      color: #76cad3;
    }
  }

  .reset-icon {
    font-size: 1.8rem;
    margin-left: auto;
    cursor: pointer;
    color: #bae4e9;

    &:hover {
      color: #76cad3;
    }
  }
`;

const TodoHeader = ({ onReset }) => {
  return (
    <TodoHeaderWrap>
      <Link to="/todo/list">
        <div className="back-icon">
          <MdArrowBack />
        </div>
      </Link>

      <div className="reset-icon" onClick={() => onReset()}>
        <MdClear />
      </div>
    </TodoHeaderWrap>
  );
};

export default React.memo(TodoHeader);
