import React from 'react';
import Input from "../../common/inputs/Input";


const ActiveCallDisplay = ({inComingLineArr, keyboardStatus, enterValue, updateEnterValue}) => {
    const name = inComingLineArr.find(elem => elem.displayValue).contactValueName;
    const number = inComingLineArr.find(elem => elem.displayValue).contactValueNumber;
    const alternativeName = name?name:number;
    const clientValue = () => {
        if (keyboardStatus.open && keyboardStatus.active) {
            return (
                <>
                    <span className="enter-phone-name text-center text-nowrap overflow-hidden">{name}</span>
                    <span className="enter-phone-number text-center text-nowrap overflow-hidden">{number}</span>

                </>)
        } else if (keyboardStatus.open && !keyboardStatus.active) {
            return (
                <>
                    <span className="enter-phone-name text-center text-nowrap overflow-hidden">{alternativeName}</span>
                <Input
                    className="enter-phone-number py-2 text-center"
                    value={enterValue}
                    onChange={updateEnterValue}
                    placeholder="тональный ввод"
                />
                </>)

        } else {
            if (!name.length) {
                return <span className="enter-phone-number text-center text-nowrap overflow-hidden">{number}</span>
            } else {
                return <span className="enter-phone-number text-center text-nowrap overflow-hidden">{name}</span>
            }
        }
    }


    return (
        <div className={`subscriber-value  d-flex flex-column align-items-center justify-content-end  
        ${inComingLineArr.find(elem => elem.conferenceActive) ? "subscriber-value-conference" : ""}`}>
            {clientValue()}
        </div>
    );
}


export default ActiveCallDisplay;
