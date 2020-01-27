import React from 'react';

const Flexible = ({children, className}) => {
    return (
        <div className={`d-flex ${className}`}>
            {children}
        </div>
    );
};

export default Flexible;