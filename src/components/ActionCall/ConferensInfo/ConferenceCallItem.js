import React from 'react';
import "./index.scss"
import "./darkScheme.scss"


const ConferenceItem = ({clientValue, className, children}) => {
    const [name, number] = [...clientValue];
      return (
        <div
            className={`conference-item d-flex flex-nowrap align-items-center justify-content-between ${children ? className : ""}`}>
            <div
                className=" d-flex flex-column justify-content-around p-0 align-items-start position-relative">
                <span
                    className="phone-book-item-name justify-content-between text-nowrap overflow-hidden"> {name}</span>
                <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
            </div>
            {children}
        </div>
    );
};

export default ConferenceItem;


