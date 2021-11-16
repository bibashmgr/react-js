// dependencies
import React from 'react';
import { useState, useEffect } from 'react';


const Basic = () => {

    const [showCase, setShowCase] = useState('Home');
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        console.log('rendering');
    }, [isTrue]);


    return (
        <section className='container text-center'>
            <div className='mt-5'>
                <h1>This is useEffect Basics.</h1>
            </div>
            <div className='mt-5'>
                <button type="button" onClick={() => {setShowCase('Home')}} className="btn btn-primary mx-2">Home</button>
                <button type="button" onClick={() => {setShowCase('News')}}  className="btn btn-primary mx-2">News</button>
                <button type="button" onClick={() => {setShowCase('Gallery')}}  className="btn btn-primary mx-2">Gallery</button>
            </div>
            <div className='h1 mt-5'>
                {showCase}
            </div>
            <div className='mt-5'>
                <button type="button" onClick={()=> {
                    setIsTrue(!isTrue);
                    console.log(isTrue);
                    }} className="btn btn-primary">Click Here</button>
            </div>
        </section>
    )
}

export default Basic
