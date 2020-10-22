import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" onClick={onToggle(todo.id)} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>예제 텍스트</span>
            <button onClick={onRemove(todo.id)}>삭제</button>
        </div>
    )
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input)
        onChangeInput('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChangeInput} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />))}
            </div>
        </div>
    );
};

export default Todos;