import React from 'react';
import './Button.scss';

const Button = ({ iconClass, label, className, onclick, ...rest }) => {
  return (
    <button className='btn btn-primary' onClick={onclick} {...rest}>
      {iconClass && <i className={iconClass}></i>} {label && <span>{label}</span>} Search here
    </button>
  );
};

export default Button;
