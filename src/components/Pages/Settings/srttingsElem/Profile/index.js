import React, {useState} from 'react';

import User from "../../../../common/icon/User";
import "./index.scss"
import RightArrom from '../../../../common/icon/arrow/RightArrow';

const statusValueArr = ["Логин", "Пароль", "Дата рождения", "Адрес"]


const Profile = () => {

    const [sipBlockIsOpen, openSipBlock] = useState(false);

    const clickSipList = (i) => {
        openSipBlock(false);
        openSipBlock(!sipBlockIsOpen)
                   };
    const childrenElem = statusValueArr.map((elem, i) =>
        <div className="sip-status-list"  key={i}
            onClick={() => clickSipList(i)}><span> {elem}</span></div>
    );

    return (
        <div className=" position-relative">

            <div className={`sip-status-block d-flex flex-column position-relative ${sipBlockIsOpen ? "open" : ""}`}>
                <div className="profile-settings  d-flex flex-nowrap align-items-center"><User/> Профиль</div>
                <RightArrom onClick={() => {
                    openSipBlock(!sipBlockIsOpen);
                }}/>
                {childrenElem}
            </div>
        </div>
    );
};

export default Profile;
