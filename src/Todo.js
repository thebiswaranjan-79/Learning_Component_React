import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {

    const[todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    return (
        <div>
            <input type='text' placeholder='new Todo... '
                onChange={(event) => setNewTodo(event.target.value)}
            /><br/>
            <br/>
            <button onClick={() => setTodos([...todos, newTodo])}>Add Todo</button>
           <TodoList todos = {todos}/>
        </div>
    );
}

export default Todo;
