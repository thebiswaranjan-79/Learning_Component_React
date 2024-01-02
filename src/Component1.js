import React from 'react';

const Component1 = () => {
    const arr = [<li>Alok</li>, <li>Mansiha</li>, <li>Dhiraj</li>, <li>Sangram</li>]
    return (
        <div>
            {arr}
        </div>
    );
}

export default Component1;
// In react , we can pass a list of components inside the JSX Curlies and it will render the components