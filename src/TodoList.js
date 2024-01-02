import React from 'react';

const TodoList = ({todos}) => { // This is an Array of Todos [{}, {}, {}] like this 
    const todoItems = todos.map((todo, index) =><li key ={index}>{todo}</li>); // React wants a unique id     
    return (
       <ul>
        <li>{todoItems}</li>
       </ul> // todo -> {id :1, data ' Some Data'}
    );
}

export default TodoList;
