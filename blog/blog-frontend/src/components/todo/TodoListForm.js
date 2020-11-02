import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';
import { TiPencil } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const TodoListFormWrap = styled.div`
  width: 650px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);

  padding: 30px;

  .card-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 2rem;

  .title {
    color: #76cad3;
    font-weight: bold;
  }

  .insert-icon {
    color: #76cad3;

    &:hover {
      cursor: pointer;
      color: #38a2ad;
    }
  }
`;

const CategoryWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  li:nth-child(1) {
    background: #ffe1ff;
  }

  li:nth-child(2) {
    background: #d0edf0;
    margin: 0 10px;
  }

  li:nth-child(3) {
    background: #d2ffd0;
  }

  .category {
    color: white;
    font-weight: bold;
    padding: 5px;
    width: 200px;
  }
`;

const categories = ['TODO', 'DOING', 'DONE'];

const TodoListForm = ({ todos, error, loading }) => {
  const todoType = (type) => {};
  return (
    <TodoListFormWrap>
      <TitleWrap>
        <div className="title">나의 할일들</div>
        <Link to="/todo/insert">
          <div className="insert-icon">
            <TiPencil />
          </div>
        </Link>
      </TitleWrap>
      <CategoryWrap>
        {categories.map((category) => (
          <li className="category" key={category}>
            {category}
          </li>
        ))}
      </CategoryWrap>
      <div className="card-wrap">
        {todos &&
          todos.map((todo) => (
            <TodoCard
              todo={todo.type === 1 ? true : false}
              doing={todo.type === 2 ? true : false}
              done={todo.type === 3 ? true : false}
              key={todo.id}
              title={todo.todo}
              username={todo.username}
              rank={todo.rank}
            />
          ))}
      </div>
    </TodoListFormWrap>
  );
};

export default TodoListForm;
