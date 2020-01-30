import React from 'react';
import "./button.scss"

const Button = ({className,onClick,value,onmouseup}) => {
    return (
        <button
            className={className}
            onClick={onClick}
            onMouseUp={onmouseup}
        >
            {value}
        </button>
    );
};

export default Button;
