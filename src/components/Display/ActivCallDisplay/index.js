import React from 'react';


const ActiveCallDisplay = ({inComingLineArr, keyboardStatus}) => {
    const name = inComingLineArr.find(elem => elem.displayValue).contactValueName;
    const number = inComingLineArr.find(elem => elem.displayValue).contactValueNumber;
    const clientValue = () => {
        if (keyboardStatus.open) {
            return (
                <>
                    <span className="enter-phone-name text-center text-nowrap overflow-hidden">{name}</span>
                    <span className="enter-phone-number text-center text-nowrap overflow-hidden">{number}</span>
                </>
            )
        }
        else {
            if(!name.length){
                return  <span className="enter-phone-number text-center text-nowrap overflow-hidden">{number}</span>
            }
            else {
                return  <span className="enter-phone-number text-center text-nowrap overflow-hidden">{name}</span>
            }
        }
    }


    return (
        <div className={`subscriber-value  d-flex flex-column align-items-center justify-content-end  
        ${inComingLineArr.find(elem => elem.conferenceActive) ? "subscriber-value-conference" : ""}`}>
            {clientValue()}
        </div>
    );
};

export default ActiveCallDisplay;
