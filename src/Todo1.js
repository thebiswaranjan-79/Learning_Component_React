import React from 'react';
import TodoItem from './TodoItem';

const Todo1 = (props) => {
    const todoItems = props.todoList.map((todo) => <TodoItem key ={todo.id} todo ={todo}/>)
    return (
        <ul>
            {todoItems}
        </ul>
    );
}

export default Todo1;
