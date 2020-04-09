import React from "react"
import CommonPhoneBook from "./contactSwitchGroup/CommonPhoneBook";
import FavoritesPhoneBook from "./contactSwitchGroup/FavoritesPhoneBook";
import GroupPhoneBook from "./contactSwitchGroup/GroupPhoneBook";


export const componentActive = (valueProps, index) => {
    switch (true) {
        case index === 0:
            return <CommonPhoneBook {...valueProps}/>;
        case index === 1:
            return <GroupPhoneBook {...valueProps}/>;
        case index === 2:
            return <FavoritesPhoneBook {...valueProps}/>;
        default:
            break;
    }
};


export const  deerGroup = [1,3,5,6,8,0,11,13];
export const  beavers = [4,7,9,10,14,15,17,21];
