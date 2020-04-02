import React from 'react';
import PhoneBookItem from "../PhoneBookItem";


const FavoritesPhoneBook = ({favoriteItem, toggleFavorite, searchArr, setActiveElem, navActiveElem, updateContactValue}) => {

    const items = searchArr.map((elem, i)=>
        favoriteItem.includes(i)? (
            <PhoneBookItem
                navActiveElem={navActiveElem}
                key={i}
                i={i}
                setActiveElem={setActiveElem}
                updateContactValue={updateContactValue} name={elem.name ? `${elem.name}` : ""}
                number={elem.number ? `${elem.number}` : ""}
                favoriteItem={favoriteItem}
                toggleFavorite={toggleFavorite}/>): false
            );

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {items}
        </div>
    );
};

export default FavoritesPhoneBook;
