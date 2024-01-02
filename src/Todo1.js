import React from 'react';

const Todo1 = (props) => {
    const todoItems = props.todoList.map((todo) => <li>{todo}</li>)
    return (
        <ul>
            {todoItems}
        </ul>
    );
}

export default Todo1;
