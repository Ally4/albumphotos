import React from 'react';

const Input = ({ type, placeholder, onchange, value }) => {
  return (
    <input
      type={type} className='input-control' value={value} onChange={onchange} placeholder={placeholder}
    />
  );
};

export default Input;
