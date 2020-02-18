import React from 'react';

const UpArrow = ( { openKeyboard } ) => {
    return (
        <i className="far fa-caret-square-up" onClick={(e)=>{openKeyboard(); e.currentTarget.classList.toggle("active")}}/>
    );
};

export default UpArrow;
