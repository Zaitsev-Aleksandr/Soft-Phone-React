import React, {useCallback} from 'react';
import {Link} from "react-router-dom";
import StarActive from "../../../common/icon/stars/StarActive";
import useRandomColor from "../../../../hooks/useRandomColor";


const PhoneBookItem = ({name, number, updateContactValue, toggleFavorite, favoriteItem, i}) => {

    const color = useRandomColor();
    const toggleItem = useCallback((arr, i) => arr.includes(i) ? arr.filter((el) => (el !== i)) : [...arr, i], []);
    const toggleStart = useCallback(() => toggleFavorite(toggleItem(favoriteItem, i)), [toggleItem, toggleFavorite, i, favoriteItem]);
    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center position-relative">
            <StarActive status={favoriteItem.includes(i)} onClick={toggleStart}/>
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                style={{backgroundColor: color[0], color: color[1]}}
            >
                {name.charAt(0).toUpperCase()}
            </div>
            <div className="d-flex flex-column">
                <span className="phone-book-item-name justify-content-between text-nowrap overflow-hidden">
                    {name}
                </span>
                <Link className="navigation-call-info-link "
                      to='/softPhone'
                      key={i}
                >
                    <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
                </Link>
            </div>
        </div>
    );
};


export default PhoneBookItem;
