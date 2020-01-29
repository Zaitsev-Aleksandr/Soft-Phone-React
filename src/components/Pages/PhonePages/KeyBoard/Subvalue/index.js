import React from 'react';

import "./index.scss"

const Subvalue = ({subValue, className}) => {
    return (
        <>
             <span className={className}>
                 {subValue}
             </span>
        </>
    );
};

export default Subvalue;
