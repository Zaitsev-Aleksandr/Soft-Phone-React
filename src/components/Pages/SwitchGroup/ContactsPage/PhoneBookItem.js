import React from 'react';


const PhoneBookItem = ({name, number, updateContactValue, style}) => {

    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center">
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                style={style}
            >
                {name.charAt(0).toUpperCase()}
            </div>
            <div className="d-flex flex-column">
                <span className="phone-book-item-name text-nowrap overflow-hidden">{name}</span>
                <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
            </div>
        </div>
    );
};



export default PhoneBookItem;
