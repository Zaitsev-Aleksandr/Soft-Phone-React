import React, {useState} from 'react';
import NavigationContact from "./NavigationContactPages";

import {componentActive} from "./statics";

const PhoneBookSection = ({searchArr,searchValue, toggleStart, updateContactValue, changeNavActiveElem, navActiveElem,absolutePath}) => {
    const [toolTip, toggleToolTip] = useState()
    const [favoriteItem, toggleFavorite] = useState([1,3, 5, 16]);

    const valueProps = {
        toggleToolTip,
        toolTip,
        searchValue,
        toggleStart,
        navActiveElem,
        favoriteItem,
        toggleFavorite,
        searchArr,
        updateContactValue,
        absolutePath
        
    };

    return (
        <>
            <NavigationContact
                changeNavActiveElem={changeNavActiveElem}
                navActiveElem={navActiveElem}
            />
            {componentActive(valueProps, navActiveElem)}
        </>
    );

};

export default PhoneBookSection;
