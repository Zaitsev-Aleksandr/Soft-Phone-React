import React from 'react';
import PhoneBookItem from "./PhoneBookItem";
import {Link} from "react-router-dom";
import {addColorAvatar, colorArr} from "./statics";


const PhoneBookSection = ({lookingFor, searchArr, updateContactValue}) => {
      const items = searchArr.map((elem, i) =>
        <Link className="navigation-call-info-link " to='/softPhone' key={i}>
            <PhoneBookItem
                style={{backgroundColor : addColorAvatar(colorArr)}}
                updateContactValue={updateContactValue} name={elem.name ? `${elem.name}` : ""}
                number={elem.number ? `${elem.number}` : ""}

            />
        </Link>);

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {!lookingFor ? <h6 className="phone-book-headline">Список Контактов</h6> : null}
            {items}
        </div>
    );

};

export default PhoneBookSection;
