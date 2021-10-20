import React from 'react';
import {useState} from 'react';

function UseStateObject() {

    const person ={
        name: 'Ram Bdr',
        age: 20,
        address: 'Pokhara'
    };

    const [man,setMan] = useState(person);

    const changeAddress = () => {
        // setMan({name:man.name,age:man.age,address:'Kathmandu'});
        if(man.address === 'Pokhara'){
            setMan({...man,address:'Kathmandu'});
        } else {
            setMan({...man,address:'Pokhara'});
        }
    };

    return (
        <div>
            <h1>UseState Object</h1>
            <h3>{man.name}</h3>
            <h3>{man.age}</h3>
            <h3>{man.address}</h3>
            <button type='button' className='btn' onClick={changeAddress}>Change Address</button>
        </div>
    )
}

export default UseStateObject;
