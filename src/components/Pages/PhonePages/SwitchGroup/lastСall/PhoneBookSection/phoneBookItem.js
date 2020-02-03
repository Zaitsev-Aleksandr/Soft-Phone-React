import React from 'react';
import PhoneBookTime from "./PhoneBookTime";

const PhoneBookItem = ({name, number,time, updateContactValue}) => {
    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-between align-items-center">
            <div className="d-flex flex-column">
            <span className="phone-book-item-name text-nowrap overflow-hidden">{name}</span>
            <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
            </div>
            <PhoneBookTime time={time} />
        </div>
    );
};

export default PhoneBookItem;
