import React from 'react';


const AbonentValue = ( {inComingLineArr}) => {
    console.log(inComingLineArr.find(elem => elem.displayValue === true).contactValueName);
    const name = inComingLineArr.find(elem=> elem.displayValue===true).contactValueName;
        const number = inComingLineArr.find(elem=> elem.displayValue===true).contactValueNumber;
    return (
        <div>
            {name}
            {number}
        </div>
    );
};

export default AbonentValue;
