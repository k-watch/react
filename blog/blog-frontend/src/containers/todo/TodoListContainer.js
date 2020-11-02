import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoListForm from '../../components/todo/TodoListForm';
import { listTodos } from '../../modules/todoList';

const TodoListContainer = () => {
  /* eslint-disable */
  const dispatch = useDispatch();
  const { todos, error, loading } = useSelector(
    ({ todoList, error, loading }) => ({
      todos: todoList.todos,
      error: todoList.error,
      loading: loading['todoList/LIST_TODOS'],
    }),
  );

  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return <TodoListForm todos={todos} error={error} loading={loading} />;
};

export default TodoListContainer;
