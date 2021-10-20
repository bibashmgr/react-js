import React from 'react';

const UseStateError = () => {
  let title = 'Random title';
  const changeTitle = () => {
    title = 'New title';
    console.log(title);
  };
  return (
    <div>
      <h1>Why to use Usestate?</h1>
      <h4>{title}</h4>
      <button className='btn' onClick={changeTitle}>
        Click Here
      </button>
    </div>
  );
};

export default UseStateError;
