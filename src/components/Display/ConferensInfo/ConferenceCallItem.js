import React from 'react';
import "./index.scss"
import {addColorAvatar, colorArr} from "../../Pages/SwitchGroup/ContactsPage/statics";



const ConferenceItem = ({clientValue, className, children}) => {


    return (
        <div className={`conference-item d-flex flex-nowrap align-items-center justify-content-between px-2 ${children? className:""}`}>
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                style={{backgroundColor: addColorAvatar(colorArr)}}
            >
                {clientValue.charAt(0).toUpperCase()}
            </div>
            <span className="conference-item-number__value text-nowrap"> {clientValue}</span>
            {children}
        </div>
    );
};

export default ConferenceItem;


