import React from 'react';
import Sip from "./sip/Sip";
import CloseIcon from "../common/icon/CloseIcon";

import "./index.scss"
import DownArrow from "../common/icon/arrow/DownArrow";

const Header = ( {openKeyboard, sipStatus,keyboardStatus}) => (
    <div className="soft-phone-header d-flex justify-content-between align-items-center">
        <Sip sipStatus={sipStatus} />

        <DownArrow  onClick={ openKeyboard }  keyboardStatus={ keyboardStatus }/>
        <CloseIcon  />
    </div>
);

export default Header;