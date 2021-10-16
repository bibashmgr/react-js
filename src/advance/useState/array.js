import React from 'react'

function Array() {
    const data = [
        {
            id:1,
            name:'Ram'
        },
        {
            id:2,
            name:'Shyam'
        },
        {
            id:3,
            name:'Hari'
        },
        {
            id:4,
            name:'Krishna'
        },
    ];

    const [people,setPeople] = React.useState(data);

    const removeItem = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    return (
        <div>
            <h1>Usestate Array</h1>
            <div>
                {people.map((person)=>{
                    return(
                        <div style={{display:'flex', justifyContent:'space-evenly',marginBottom:'10px'}}>
                            <div key={person.id}>{person.name}</div>
                            <button type='button' className='btn' onClick={()=>{removeItem(person.id)}}>Remove</button>
                        </div>
                    );
                })}
            </div>
            <button type='button' className='btn' onClick ={() => {setPeople([])}}>Remove all</button>
        </div>
    )
}

export default Array;
