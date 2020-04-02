import React from 'react';
import PhoneBookItem from "../PhoneBookItem";


const CommonPhoneBook = ({favoriteItem, toggleFavorite, searchArr, setActiveElem, navActiveElem, updateContactValue}) => {
    const items = searchArr.map((elem, i) => {
        return (
            <PhoneBookItem
                navActiveElem={navActiveElem}
                key={i}
                i={i}
                setActiveElem={setActiveElem}
                updateContactValue={updateContactValue} name={elem.name ? `${elem.name}` : ""}
                number={elem.number ? `${elem.number}` : ""}
                favoriteItem={favoriteItem}
                toggleFavorite={toggleFavorite}
            />
        );
    });

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {items}
        </div>
    );
};

export default CommonPhoneBook;
