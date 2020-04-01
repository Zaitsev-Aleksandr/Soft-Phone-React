import React from 'react';
import PhoneBookItem from "./PhoneBookItem";
import {Link} from "react-router-dom";
import {addColorAvatar, colorArr} from "./statics";
import NavigationContact from "./NavigationContactPages";
import CommonPhoneBook from "./contactSwitchGroup/CommonPhoneBook";


const PhoneBookSection = ({searchArr, updateContactValue, setActiveElem}) => {
       return (
        <>
            <NavigationContact/>
            <CommonPhoneBook searchArr={searchArr}
                             setActiveElem={setActiveElem}
                             updateContactValue={updateContactValue}
            />
        </>
    );

};

export default PhoneBookSection;
