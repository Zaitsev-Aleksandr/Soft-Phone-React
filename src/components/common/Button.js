import React from 'react';
import "./button.scss"

const Button = ({className, onClick, onMouseUp ,onMouseDown, value}) => {
    return (
        <button
            className={className}
            onClick={onClick}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown}
        >
            {value}
        </button>
    );
};

export default Button;