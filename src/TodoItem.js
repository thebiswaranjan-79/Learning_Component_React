import React from 'react';


function handleClick(todo){
    alert(`${todo.data} Clicked `);
}
function TodoItem(props){

    return <li onClick ={() => handleClick(props.todo)}>{props.todo.data}</li>

}

export default TodoItem;
