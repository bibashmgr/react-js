import React from 'react'

function UseStateArray() {
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
                    const {id,name} = person;
                    return(
                        <div key={id}>
                            <h4>{name}</h4>
                            <button type='button' className='btn' onClick={()=>{removeItem(person.id)}}>Remove</button>
                        </div>
                    );
                })}
            </div>
            <button type='button' className='btn' onClick ={() => {setPeople([])}}>Remove all</button>
        </div>
    )
}

export default UseStateArray;
