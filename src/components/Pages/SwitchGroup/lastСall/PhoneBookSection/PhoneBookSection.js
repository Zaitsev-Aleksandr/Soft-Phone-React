import React from 'react';
import PhoneBookItem from "./PhoneBookItem";
import {Link} from "react-router-dom";

const PhoneBookSection = ({searchArr, updateContactValue}) => {
      const items = searchArr.map((elem, i) =>
        <Link className="navigation-call-info-link " to='/softPhone' key={i}>
            <PhoneBookItem
                updateContactValue={updateContactValue} name={elem.name ? `${elem.name}` : ""}
                number={elem.number ? `${elem.number}` : ""}
                time={elem.time}

            />
        </Link>);


    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
                   {items}
        </div>
    );
};

export default PhoneBookSection;
