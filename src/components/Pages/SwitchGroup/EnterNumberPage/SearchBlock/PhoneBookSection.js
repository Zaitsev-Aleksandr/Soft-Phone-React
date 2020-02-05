import React from 'react';
import PhoneBookItem from "./PhoneBookItem";
import {Link} from "react-router-dom";
import {addColorAvatar, colorArr} from "../../ContactsPage/statics";

import "./index.scss"

const PhoneBookSection = ({searchArr, updateContactValue, toggleLookingFor, reloadState}) => {
    const items = searchArr.map((elem, i) =>
        <Link className="navigation-call-info-link " to='/softPhone' key={i}>
            <PhoneBookItem
                reloadState={reloadState}
                style={{backgroundColor:addColorAvatar(colorArr)}}
                updateContactValue={updateContactValue}
                toggleLookingFor={toggleLookingFor}
                name={elem.name ? `${elem.name}` : ""}
                number={elem.number ? `${elem.number}` : ""}

            />
        </Link>);

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {items}
        </div>
    );

};

export default PhoneBookSection;
