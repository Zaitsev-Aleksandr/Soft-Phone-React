import React, {useEffect} from 'react';
import PhoneBookItem from "../PhoneBookItem";


const CommonPhoneBook = ({favoriteItem, toggleFavorite, searchArr, setActiveElem, navActiveElem, updateContactValue}) => {
    useEffect(()=>{
        childrenElem()
    }, [searchArr])
  const childrenElem = ()=>searchArr.map((elem, i) => {
        return (
            <PhoneBookItem
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
