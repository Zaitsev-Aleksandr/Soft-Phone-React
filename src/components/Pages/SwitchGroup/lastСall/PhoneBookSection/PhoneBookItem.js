import React from 'react';
import PhoneBookTime from "./PhoneBookTime";
import img0 from "../../../../../resources/img/0.png"
import img1 from "../../../../../resources/img/1.png"
import img2  from "../../../../../resources/img/2.png"

const bgImegArr =[img0,img1,img2];


const PhoneBookItem = ({name, number,time, updateContactValue}) => {
    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center">

            <div
                className="phone-image-status d-flex justify-content-center align-items-center mr-2"
                style={{backgroundImage: `url(${bgImegArr[Math.floor(Math.random()*3)]})` }}/>
            <div className="d-flex flex-column">
            <span className="phone-book-item-name text-nowrap overflow-hidden">{name}</span>
            <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
            </div>
            <PhoneBookTime time={time} />
        </div>
    );
};

export default PhoneBookItem;


        