import React, {useCallback, useState} from 'react';
import {Link} from "react-router-dom";
import StarActive from "../../common/icon/stars/StarActive";
import StarPass from  "../../common/icon/stars/StarPass";
import useRandomColor from "../../../hooks/useRandomColor";
import Button from "../../common/Button";
import Info from "../../common/icon/info";


const PhoneBookItem = ({client, className, updateContactValue, toggleToolTip, toggleFavorite, favoriteItem, i, absolutePath}) => {
    const [toolTipPosition, setPosition] = useState()
    const [timerID, startTimer]=useState()
    const openInfoModalFunc= useCallback( ()=>{ 
        document.querySelector(".client-list-modal").classList.add("active");
        document.querySelector(".main").classList.add("on-close");
    }, [])
    const color = useRandomColor();
    const toggleItem = useCallback((arr, i) => arr.includes(i) ? arr.filter((el) => (el !== i)) : [...arr, i], []);
    const toggleStart = useCallback(() => toggleFavorite(toggleItem(favoriteItem, i)), [toggleItem, toggleFavorite, i, favoriteItem]);
    const name = client.name
    const number = client.number
        const toolTipItem=(key , value)=><div className='tool-tip-client-row d-flex   flex-nowrap'><span className="tool-tip-client-info__key text-nowrap">{ key }</span> <span className="tool-tip-second-value "> &nbsp;{value}</span></div>
    const toolTipComponent = () => {
        return (
            <div className="tool-tip-client-info d-flex flex-column position-fixed"
                 style={
                     toolTipPosition
                 }>
                {name ? toolTipItem("Имя : ", name) : null}
                {number ? toolTipItem("Номер : ", number) : null}
                {client.email ? toolTipItem("mail : ", client.email) : null}
                {client.work ? toolTipItem("Компания : ", client.work) : null}
                              {client.position ? toolTipItem("Должность : ", client.position) : null}
                {client.title ? toolTipItem("Описание : ", client.title) : null}
                    <Button value="Информфция" className="client-card-info__button" onClick={openInfoModalFunc}/>
            </div>)
    }

    const openToolTip = (e) => {
          e.stopPropagation()
          const newleft = e.target.closest(".phone-book-item").getBoundingClientRect().right -15
        const newTop = e.target.closest(".phone-book-item").getBoundingClientRect().top - 15   
    if (toolTipPosition) return null
            setPosition({
            top: newTop,
            left: newleft
        })
        startTimer(setTimeout(() => {
                 toggleToolTip(i)
        }, 800))
    }
    const closeToolTip = () => {
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
        
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center  position-relative mr-2"
                style={{backgroundColor: color[0], color: color[1]}}
            >
                {name.charAt(0).toUpperCase()}

            </div>
            <div className="d-flex flex-column">
                <Link className="navigation-call-info-link "
                      to={`${absolutePath}/SoftPhone`}
                      key={i}
                >
                    <span
                        className="phone-book-item-name justify-content-between text-nowrap overflow-hidden">{name}</span>

                    <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
                </Link>
            </div>
            <div className=" tool-tip-client-block"
                 onMouseEnter={(e) => { openToolTip(e)}}
                 onMouseLeave={closeToolTip}
            >
                 <Info />
                {className ? toolTipComponent() : ""}
               
            </div>
            {favoriteItem.find( e => e===i) ? <StarActive status={favoriteItem.includes(i)} onClick={toggleStart} />:<StarPass status={favoriteItem.includes(i)} onClick={toggleStart}/>}
            
        </div>
    );
};


export default PhoneBookItem;
