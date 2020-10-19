import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '공부하기',
      checked: true,
    },
    {
      id: 2,
      text: '운동하기',
      checked: true
    },
    {
      id: 3,
      text: '수영하기',
      checked: false,
    }
  ])

  const nextId = useRef(4)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      }
      setTodos(todos.concat(todo))
      nextId.current += 1
    }, [todos])

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    }, [todos],
  )

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;