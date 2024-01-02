import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const[x, setX] = useState(10);
    const[count, setCount] = useState(10);
    
    function updateCount(){
        setCount(count+1);
    }
    // useState() -> it returns an Array and it takes a variable and a setFunctions
    
    
    return (
        <div className='counter'>
            <span id='counterValue'> X : {x}</span><br/>
            <span id='counterValue'>Count : {count}</span>
            <br/>
            
            <button onClick={() => setX(x+1)}>Click and Update X</button>
            <br/>
            <button onClick={updateCount}>Click and Update Count</button>
            <br/>
           
        </div>
    );
}

export default Counter;
