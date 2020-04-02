import React from 'react';
import "./index.scss"
import useRandomColor from "../../../hooks/useRandomColor";

const ConferenceItem = ({clientValue, className, children}) => {
    const color = useRandomColor();

    return (
        <div className={`conference-item d-flex flex-nowrap align-items-center justify-content-between px-2 ${children? className:""}`}>
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                style={{backgroundColor: color[0], color: color[1]}}
            >
                {clientValue.charAt(0).toUpperCase()}
            </div>
            <span className="conference-item-number__value text-nowrap"> {clientValue}</span>
            {children}
        </div>
    );
};

export default ConferenceItem;


