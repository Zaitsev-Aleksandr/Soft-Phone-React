import React from 'react';

import "./input.scss"

const Input = ({className, onChange, value, placeholder, disabled}) => {
    return (
        <input
            className={className}
             onChange={onChange}
            value={value}
            placeholder={placeholder}
            autoFocus="autofocus"
            disabled={disabled}
        />)
};

export default Input;
