import React from 'react';
import PhoneBookItem from "../PhoneBookItem";
import {addColorAvatar, colorArr} from "../statics";


const CommonPhoneBook = ({searchArr, updateContactValue, setActiveElem}) => {

    const items = searchArr.map((elem, i) =>
        <PhoneBookItem
            setActiveElem={setActiveElem}
            i={i}
            color={addColorAvatar(colorArr)}
            updateContactValue={updateContactValue} name={elem.name ? `${elem.name}` : ""}
            number={elem.number ? `${elem.number}` : ""}
        />
    );

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {items}
        </div>
    );
};

export default CommonPhoneBook;
