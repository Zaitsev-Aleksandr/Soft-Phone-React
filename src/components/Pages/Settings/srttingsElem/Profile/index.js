import React, {useState} from 'react';

import User from "../../../../common/icon/User";
import "./index.scss"
import RightArrom from '../../../../common/icon/arrow/RightArrow';

const statusValueArr = ["Логин", "Пароль", "Дата рождения", "Адрес"]


const Profile = () => {

    const [sipBlockIsOpen, openSipBlock] = useState(false);

    const clickSipList = (i) => {
        openSipBlock(false);
                   };
    const childrenElem = statusValueArr.map((elem, i) =>
        <li className="sip-status-list"  key={i}
            onClick={() => clickSipList(i)}><span> {elem}</span></li>
    );

    return (
        <div className=" position-relative">

            <ul className={`sip-status-block d-flex flex-column position-relative ${sipBlockIsOpen ? "open" : ""}`}>
                <div className="profile-settings  d-flex flex-nowrap align-items-center"><User/> Профиль</div>
                <RightArrom onClick={() => {
                    openSipBlock(!sipBlockIsOpen);
                }}/>
                {childrenElem}
            </ul>
        </div>
    );
};

export default Profile;
