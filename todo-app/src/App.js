import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = []

  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)
    default:
      return todos
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef(2501)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      }
      dispatch({ type: 'INSERT', todo })
      nextId.current += 1
    }, [])

  const onToggle = useCallback(
    (id) => {
      dispatch({ type: 'TOGGLE', id })
    }, [],
  )

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id })
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;