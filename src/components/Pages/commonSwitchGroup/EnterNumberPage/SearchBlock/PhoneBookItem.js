import React from 'react';
import useRandomColor from "../../../../../hooks/useRandomColor";


const PhoneBookItem = ({name, number, updateContactValue, toggleLookingFor,reloadState, style}) => {
    const color = useRandomColor();
    return (
        <div
           onClick={(e)=>{updateContactValue(e); toggleLookingFor(e); reloadState()}}
            className="enter-phone-book-item d-flex flex-nowrap justify-content-start align-items-center">
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                style={{backgroundColor: color[0], color: color[1]}}
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
