import React from 'react';
import TodoTemplate from '../components/todo/TodoTemplate';
import TodoListContainer from '../containers/todo/TodoListContainer';

const TodoListPage = () => {
  return (
    <TodoTemplate>
      <TodoListContainer />
    </TodoTemplate>
  );
};

export default TodoListPage;
