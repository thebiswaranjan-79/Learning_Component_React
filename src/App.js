import React from 'react';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';
import Component1 from './Component1';
import Todo1 from './Todo1';

function App() {
  const todos = ['Todo1', 'Todo 2', 'Todo 3']

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* Every  SAme type Component have their own Memory  */}
      {/* <Counter/> */}
      {/* <Todo/> */}

      {/* <Component1/> */}
      <Todo1 todoList = {todos}/>
    </div>
  );
}

export default App;
