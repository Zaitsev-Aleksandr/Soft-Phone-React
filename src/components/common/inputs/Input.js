import React from 'react';

import "./input.scss"
const Input = ({className,onChange, value, placeholder, autofocus}) => {
    return (
        <input
            className={className}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              autoFocus={autofocus}
        />)
};

export default Input;
