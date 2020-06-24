import React from 'react';

const PhoneBookItem = ({elem, updateContactValue}) => {
    const {name, number, date, time, status} = elem;
    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center w-100">
            <div className={`phone-image-status mr-2 ${status}`}/>
            <div className="d-flex flex-column w-100">
                <span className="phone-book-item-name">{name}</span>
                <span className="phone-book-item-number text-nowrap">{number}</span>
            </div>
            <div className="call-time-date d-flex text-right flex-column">
                {date} {time}
            </div>
        </div>
    );
};

export default PhoneBookItem;


        