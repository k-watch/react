import React, { useCallback } from 'react';
import { List } from 'react-virtualized'
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListStyle = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`

const TodoList = ({ todos, onToggle, onRemove }) => {
    const rowRenderer = useCallback(({ index, key, style }) => {
        const todo = todos[index]
        return (
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    }, [onRemove, onToggle, todos])

    return (
        <TodoListStyle>
            <List
                width={512}
                height={513}
                rowCount={todos.length}
                rowHeight={57}
                rowRenderer={rowRenderer}
                list={todos}
                style={{ outline: 'none' }}
            />
        </TodoListStyle>
    );
};

export default React.memo(TodoList);