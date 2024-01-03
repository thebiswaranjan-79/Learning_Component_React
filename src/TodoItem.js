import React, { useState } from 'react';
import "./TodoItem.css"

function handleClick(todo){
    alert(`${todo.data} Clicked `);
}
function TodoItem(props){

    const [isFinished, setIsFinished] = useState(false);

    return (
        <div>
            <li>
               <span className = {(isFinished) ? 'todo-done' : 'todo-notdone'}>{props.todo.data}</span> 
            </li>
            <button onClick={() => setIsFinished(!isFinished)}>{(isFinished) ? 'Redo' : 'Done'}</button>
        </div>
    )

}

export default TodoItem;
