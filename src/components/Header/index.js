import React from 'react';
import Sip from "./sip/Sip";
import CloseIcon from "../common/icon/CloseIcon";

import "./index.scss"
import UpArrow from "../common/icon/arrow/UpArrow";

const Header = ( {openKeyboard}) => (
    <div className="soft-phone-header d-flex justify-content-between py-2 align-items-center w-100 ">
        <Sip />

        <UpArrow  onClick={(e)=>{openKeyboard(); e.currentTarget.classList.toggle("active")}}/>
        <CloseIcon  />
    </div>
);

export default Header;