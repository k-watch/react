import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListStyle = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
        <TodoListStyle>
            {todos.map(todo => (<TodoListItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />))}
        </TodoListStyle>
    );
};

export default TodoList;