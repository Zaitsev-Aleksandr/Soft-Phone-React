import React from 'react';
import PhoneBookItem from "../PhoneBookItem";


const CommonPhoneBook = ({favoriteItem,toolTip, toggleToolTip,toggleFavorite, searchArr, setActiveElem, navActiveElem, updateContactValue, absolutePath}) => {
   
  const childrenElem = ()=>searchArr.map((elem, i) => {
        return (
            <PhoneBookItem
            absolutePath={absolutePath}
                className={`${ toolTip===i? "active":""}`}
                toggleToolTip={toggleToolTip}
                navActiveElem={navActiveElem}
                key={i}
                i={i}
                setActiveElem={setActiveElem}
                updateContactValue={updateContactValue}
               client={elem}
                favoriteItem={favoriteItem}
                toggleFavorite={toggleFavorite}
            />
        );
    });

    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {childrenElem()}
        </div>
    );
};

export default CommonPhoneBook;
