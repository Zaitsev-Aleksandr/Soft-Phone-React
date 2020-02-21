import React from 'react';

import "./callStatusValue.scss"


const CallStatusInfo = ({className, value}) => {
    return (
        <span className={`call-status-value ${className}`}>
            {value}
        </span>
    );
};

export default CallStatusInfo;


