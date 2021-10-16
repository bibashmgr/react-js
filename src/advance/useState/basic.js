import React from 'react';
import {useState} from 'react';

function Basic() {
    // console.log(useState);
    const [text, setText] = useState('Random title');
    const clickHandler = () => {
        if(text === 'Random title'){
            setText('New title');
        } else {
            setText('Random title');
        }
    };
    return (
        <div>
            <h1>UseState Example</h1>
            <h2>{text}</h2>
            <button type='button' className='btn' onClick={clickHandler}>Click Here</button>
        </div>
    )
}

export default Basic;
