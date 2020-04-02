import React, { useCallback, useRef } from 'react';
import StarsPass from "../../../common/icon/stars/StarsPass";
import {Link} from "react-router-dom";
import StarActive from "../../../common/icon/stars/StarActive";

export  const colorArr = [["#FFE1E1","#FD8181"],["#D7F7C8", "#6DD453"],["#FFF2C9", "#FFCA27"], ["#D9EAFE", "#213991"], ["#e4d5f6", "#9B51E0"]];
export const addColorAvatar=(arr)=>arr[Math.floor(Math.random()*5)];

const PhoneBookItem = ({name, number, updateContactValue, setActiveElem, toggleFavorite, favoriteItem, navActiveElem, i}) => {

    const color = useRef(addColorAvatar(colorArr)).current;
    const toggleItem = useCallback((arr, i) => arr.includes(i) ? arr.filter((el) => (el !== i)) : [...arr, i], []);
    const toggleStart = useCallback(() => toggleFavorite(toggleItem(favoriteItem, i)), [toggleItem, toggleFavorite, i, favoriteItem]);

    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center position-relative">
            { favoriteItem.includes(i) ? <StarActive onClick={toggleStart}/>: <StarsPass onClick={toggleStart}/>}
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
                      onClick={() => setActiveElem(0)}
                >
                    <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
                </Link>
            </div>
        </div>
    );
};


export default PhoneBookItem;
