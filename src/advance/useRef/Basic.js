// dependencies
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Basic = () => {

    const [name,setName] = useState('');
    const focusOn = useRef();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    useEffect(() => {
        console.log('rendering');
    });

    // useRef doesnot cause re-render like useState

    return (
        <section className='container text-center'>
            <div className='mt-5'>
                <h1>This is useRef Basics.</h1>
            </div>
            <div className='mt-5'>
                <input ref={focusOn} type="text" className='form-control'value={name} onChange={handleChange}/>
                <h1 className='mt-5'>
                    My name is <span className='text-capitalize'>{name}</span>
                </h1>
                <button type="button" className="btn btn-primary mt-5" onClick={() => {focusOn.current.focus()}}>Focus</button>
            </div>
        </section>
    )
}

export default Basic
