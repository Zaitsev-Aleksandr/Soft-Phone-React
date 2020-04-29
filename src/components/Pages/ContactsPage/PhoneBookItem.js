import React, {useCallback, useState} from 'react';
import {Link} from "react-router-dom";
import StarActive from "../../common/icon/stars/StarActive";
import useRandomColor from "../../../hooks/useRandomColor";
import Button from "../../common/Button";


const PhoneBookItem = ({client, className, updateContactValue, toggleToolTip, toggleFavorite, favoriteItem, i}) => {
    const [toolTipPosition, setPosition] = useState()
    const color = useRandomColor();
    const toggleItem = useCallback((arr, i) => arr.includes(i) ? arr.filter((el) => (el !== i)) : [...arr, i], []);
    const toggleStart = useCallback(() => toggleFavorite(toggleItem(favoriteItem, i)), [toggleItem, toggleFavorite, i, favoriteItem]);
    const name = client.name
    const number = client.number
    let timerID = null

    const toolTipComponent = () => {
        return (
            <div className="tool-tip-client-info d-flex flex-column position-fixed"
                 style={
                     toolTipPosition
                 }>
                {Object.keys(client).map((elem, i) =>
                    <span key={i} className="tool-tip-client-row d-flex flex-nowrap">{elem}: <span
                        className="tool-tip-second-value text-nowrap"> {client[elem]}</span></span>)}
                        <Button value="Информфция" className="client-card-info"/>
            </div>)
    }

    const openToolTip = (e) => {
        console.log(true);
        e.persist()
        if (toolTipPosition) e.preventDefault()

        timerID = setTimeout(() => {
            setPosition({
                top: e.pageY - 20,
                left: e.pageX
            })
            toggleToolTip(i)
        }, 800)
    }
    const closeToolTip=()=>{
        clearTimeout(timerID)
        toggleToolTip("");
        setPosition(null)
    }

    return (

        <div
            onClick={(e) => {
                updateContactValue(e);
            }}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center position-relative">
            <StarActive status={favoriteItem.includes(i)} onClick={toggleStart}/>
            <div
                onMouseEnter={(e) => {
                    openToolTip(e)
                }}
                onMouseLeave={closeToolTip}

                className="phone-book-avatar d-flex justify-content-center align-items-center  position-relative mr-2"
                style={{backgroundColor: color[0], color: color[1]}}
            >
                {name.charAt(0).toUpperCase()}
                {className ? toolTipComponent() : ""}
            </div>
            <div className="d-flex flex-column">
                <Link className="navigation-call-info-link "
                      to='/softPhone'
                      key={i}
                >
                    <span
                        className="phone-book-item-name justify-content-between text-nowrap overflow-hidden">{name}</span>

                    <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
                </Link>
            </div>
        </div>
    );
};


export default PhoneBookItem;
