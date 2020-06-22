import React, {useCallback, useContext} from 'react';
import {Link} from "react-router-dom";
import StarActive from "../../common/icon/stars/StarActive";
import StarPass from "../../common/icon/stars/StarPass";
import useRandomColor from "../../../hooks/useRandomColor";
import Info from "../../common/icon/info";
import {AbsolutePatht} from "../../../Context/Context"



const PhoneBookItem = ({client, updateContactValue, toggleFavorite, favoriteItem, to, i}) => {
    const absolutePath = useContext(AbsolutePatht);
    const color = useRandomColor();
    const toggleItem = useCallback((arr, i) => arr.includes(i) ? arr.filter((el) => (el !== i)) : [...arr, i], []);
    const toggleStart = useCallback(() => toggleFavorite(toggleItem(favoriteItem, i)), [toggleItem, toggleFavorite, i, favoriteItem]);
    const name = client.name
    const number = client.number;
    const avatar =  client.avatar;


    return (
        <div
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center position-relative">
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center  position-relative mr-2"
                style={{backgroundImage: `url(${avatar})`, backgroundColor: color[0], color: color[1]}}
            >
                {avatar ? "" : name.charAt(0).toUpperCase()}

            </div>
            <div className="d-flex flex-column"
                 onClick={updateContactValue}>

                <Link className="navigation-call-info-link "
                      to={`${absolutePath}/`}
                      key={i}
                >
                    <span
                        className="phone-book-item-name justify-content-between text-nowrap overflow-hidden">{name}</span>

                    <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
                </Link>
            </div>
            <Link to={to}>
                <Info/>
            </Link>
            {
                favoriteItem.find(e => e === i) ?
                    <StarActive status={favoriteItem.includes(i)} onClick={toggleStart}/> :
                    <StarPass status={favoriteItem.includes(i)} onClick={toggleStart}/>
            }
        </div>
    );
};


export default PhoneBookItem;
