import React from 'react';

const PhoneBookTime = ({time}) => {
    return (
        <span className="phone-book-item-time text-nowrap ml-auto">
            {time}
        </span>
    );
};

export default PhoneBookTime;
