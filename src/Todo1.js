import React, { useState } from 'react';
import TodoItem from './TodoItem';

const Todo1 = (props) => {
    // const todoItems = props.todoList.map((todo) => <TodoItem key ={todo.id} todo ={todo}/>);

    const [todoItems, setTodoItems] = useState([{data :'Todo 1', id:12}, {data : 'Todo 2', id : 13}]);
    const [inputText, setInputText] = useState("");
    return (
        <>
        <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button onClick={() => setTodoItems([...todoItems, {data : inputText, id : ((new Date()). getTime())}])}>Add</button>
        <ul>
            {todoItems.map((todo) =>  <TodoItem todo={todo} key = {todo.id}/>)}
        </ul>
      
        </>
    );
}

export default Todo1;
