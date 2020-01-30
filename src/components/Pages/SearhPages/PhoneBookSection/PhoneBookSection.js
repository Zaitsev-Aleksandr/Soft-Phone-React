import React from 'react';
import PhoneBookItem from "./phoneBookItem";

const PhoneBookSection = ({lookingFor, searchArr, updateContactValue}) => {
    const items = searchArr.map((elem, i) =>
        <PhoneBookItem  updateContactValue={updateContactValue} name={elem.name ?`${elem.name}`: ""} number={elem.number ?`${elem.number}` : ""}
            key={i}
        />);
    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {!lookingFor ? <h6 className="phone-book-headline">Последние контакты</h6> : null}
            {items}
        </div>
    );
};

export default PhoneBookSection;
