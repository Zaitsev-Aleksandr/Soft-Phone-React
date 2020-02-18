import React from 'react';
import "./button.scss"

const Button = ({className, onClick, value}) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;