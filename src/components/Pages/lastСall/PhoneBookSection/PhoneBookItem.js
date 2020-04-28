import React from 'react';

const PhoneBookItem = ({elem, updateContactValue}) => {
    const {name, number, date, time, status} = elem;
    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center w-100">
            <div className={`phone-image-status mr-2 ${status}`}/>
            <div className="d-flex flex-column w-100">
                <div className="d-flex flex-nowrap flex-nowrap justify-content-between align-items-center w-100">
                    <span className="phone-book-item-name">{name}</span>
                </div>
                <div className="d-flex flex-nowrap flex-nowrap justify-content-between align-items-center w-100">
                    <span className="phone-book-item-number text-nowrap">{number}</span>
                </div>
            </div>
            <div className="d-flex flex-column ml-auto align-items-end">
                <span className="call-time-date text-right ">{date}</span>
                <span className="call-time-date text-right">{time}</span>
            </div>
        </div>
    );
};

export default PhoneBookItem;


        