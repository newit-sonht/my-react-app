import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    todos: PropTypes.array,
    onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
    todos: [],
    onToDoClick: null,
};

function ToDoList(props) {

    const {todos, onToDoClick} = props;

    function handleClick(todo) {
        if(onToDoClick) {
            onToDoClick(todo)
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleClick(todo)}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;