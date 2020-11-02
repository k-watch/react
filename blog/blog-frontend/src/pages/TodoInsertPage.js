import React from 'react';
import TodoTemplate from '../components/todo/TodoTemplate';
import TodoInsertContainer from '../containers/todo/TodoInsertContainer';

const TodoInsertPage = () => {
  return (
    <TodoTemplate>
      <TodoInsertContainer />
    </TodoTemplate>
  );
};

export default TodoInsertPage;
