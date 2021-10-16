import React from 'react';
import { useState } from 'react';

const Error = () => {
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

export default Error;
