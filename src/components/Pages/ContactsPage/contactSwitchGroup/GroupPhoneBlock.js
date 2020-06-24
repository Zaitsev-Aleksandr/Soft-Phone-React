import React, {useEffect, useState} from 'react';
import useRandomColor from "../../../../hooks/useRandomColor";
import PhoneBookItem from "../PhoneBookItem";
import searchFunction from "../../../../directionFunctional/searchFunction";
import phoneBook from "../../../Main/commonStatic";
import DownArrow from '../../../common/icon/arrow/DownArrow';


const PhoneGroupBlock = ({navActiveElem, searchValue, toolTip, toggleToolTip, clientArr, setActiveElem, updateContactValue, favoriteItem, toggleFavorite}) => {
    const groupName = clientArr[0];
    const [groupBlockIsOpen, openGroupBlock] = useState(false);
    const [clientValue, searchClient] = useState(clientArr[1].map((elem) => phoneBook[elem]))
    const color = useRandomColor();
    useEffect(() => {
        searchClient(searchFunction(clientArr[1].map((elem) => phoneBook[elem]), /\s+/g, searchValue));
    }, [clientArr ,searchValue])
      const childrenElem = clientValue.map((elem, i) => {
         return (<PhoneBookItem
            className={`${toolTip === i ? "active" : ""}`}
            toggleToolTip={toggleToolTip}
            navActiveElem={navActiveElem}
            key={i}
            i={i}
            setActiveElem={setActiveElem}
            updateContactValue={updateContactValue}
            client={clientValue[i]}
            favoriteItem={favoriteItem}
            toggleFavorite={toggleFavorite}
        />)
    });

    return (
        <div
            className={`phone-group-block d-flex flex-column position-relative overflow-hidden ${groupBlockIsOpen || searchValue.length ? "open" : ""}`}
            onClick={() => {
                openGroupBlock(!groupBlockIsOpen);}}
            >
            <div className="phone-group-block__header d-flex flex-nowrap position-relative align-items-center">
                <div
                    className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                    style={{backgroundColor: color[0], color: color[1]}}
                >
                    {groupName.charAt(0).toUpperCase()}
                </div>
                <div className="common-block-title d-flex flex-column align-items-center;">
                    <span className="phone-book-item-number text-nowrap">{groupName}</span>
                    <span  className="phone-book-item-name">{clientValue.length} <span >  контактов</span></span>

                </div>
                <DownArrow
                    keyboardStatus={groupBlockIsOpen }
                    onClick={() => {
                        openGroupBlock(!groupBlockIsOpen);
                    }}/></div>
            <div className="phone-group-block-wrapper d-flex flex-column position-relative">{childrenElem}</div>
        </div>
    );
};


const PhoneBookPage = ({favoriteItem, toolTip, toggleToolTip, searchValue, toggleFavorite, setActiveElem, navActiveElem, updateContactValue}) => {
    const group = [["Слоны", [4, 7, 9, 12, 13, 16, 18]], ["Олени", [6, 17, 21]], ["Егорки", [8, 1, 14, 20]]];

    const childrenGroup = group.map((elem, index) => {

        return (
        <PhoneGroupBlock
            toolTip={toolTip}
            toggleToolTip={toggleToolTip}
            clientArr={group[index]}
            searchValue={searchValue}
            key={index}
            navActiveElem={navActiveElem}
            i={index}
            setActiveElem={setActiveElem}
            updateContactValue={updateContactValue}
            favoriteItem={favoriteItem}
            toggleFavorite={toggleFavorite}/>)
    })
    return (
        <div className="phone-book-section d-flex flex-column overflow-auto">
            {childrenGroup}
        </div>
    );
};

export default PhoneBookPage;