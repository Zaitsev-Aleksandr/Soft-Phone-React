import React from 'react';
import "./index.scss"

const SubscriberValue = ({inComingLineArr}) => {
    const name = inComingLineArr.find(elem => elem.displayValue ).contactValueName;
    const number = inComingLineArr.find(elem => elem.displayValue).contactValueNumber;
    return (
        <div className={`subscriber-value  d-flex flex-column align-items-center justify-content-end  ${inComingLineArr.find(elem => elem.conferenceActive)? "subscriber-value-conference":"" }`}>
            <span className="enter-phone-name text-nowrap overflow-hidden">{name}</span>
            <span className="enter-phone-number text-nowrap overflow-hidden">{number}</span>
        </div>
    );
};

export default SubscriberValue;
