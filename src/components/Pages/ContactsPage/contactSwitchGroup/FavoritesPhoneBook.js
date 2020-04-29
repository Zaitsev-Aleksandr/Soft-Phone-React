import React from 'react';
import PhoneBookItem from "../PhoneBookItem";

const FavoritesPhoneBook = ({favoriteItem, toggleToolTip, toolTip, toggleFavorite, searchArr, setActiveElem, navActiveElem, updateContactValue}) => {

    const items = searchArr.map((elem, i) =>
        favoriteItem.includes(i) ? (
            <PhoneBookItem
                className={`${ toolTip===i? "active":""}`}
                toggleToolTip={toggleToolTip}
                navActiveElem={navActiveElem}
                key={i}
                i={i}
                setActiveElem={setActiveElem}
                updateContactValue={updateContactValue}
                client={elem}
                favoriteItem={favoriteItem}
                toggleFavorite={toggleFavorite}/>) : false
    );

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {items}
        </div>
    );
};

export default FavoritesPhoneBook;
