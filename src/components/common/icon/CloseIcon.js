import React from 'react';

const CloseIcon = ({className, onClick}) => {
    return (
        <i className={`fas fa-times  ${className}`} onClick={onClick}/>
    );
};

export default CloseIcon;
