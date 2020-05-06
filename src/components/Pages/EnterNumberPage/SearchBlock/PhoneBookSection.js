import React from 'react';
import PhoneBookItem from "./PhoneBookItem";
import {Link} from "react-router-dom";


import "./index.scss"
import "./darkScheme.scss"

const PhoneBookSection = ({searchArr, updateContactValue, toggleLookingFor,keyboardStatus, reloadState, className,absolutePath}) => {
    const items = searchArr.map((elem, i) =>
        <Link className="navigation-call-info-link " to={`${absolutePath}/SoftPhone`} key={i}>
            <PhoneBookItem
                 keyboardStatus={keyboardStatus}
                reloadState={reloadState}
                updateContactValue={updateContactValue}
                toggleLookingFor={toggleLookingFor}
                name={elem.name ? `${elem.name}` : ""}
                number={elem.number ? `${elem.number}` : ""}
            />
        </Link>);

    return (
        <div className={`phone-book-section d-flex flex-column overflow-auto ${className}`}>
            {items}
        </div>
    );

};

export default PhoneBookSection;
