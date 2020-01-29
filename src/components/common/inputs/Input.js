import React from 'react';

import "./input.scss"
const Input = ({onChange}) => {
    return (
        <input onChange={onChange} placeholder="Поиск" autoFocus= "autoFocus"/>
    );
};

export default Input;
