import React from 'react';
import Sip from "./sip/Sip";
import CloseIcon from "../common/icon/CloseIcon";

import "./index.scss"

const Header = () => (
    <div className="d-flex justify-content-between py-2 align-items-center ">
        <Sip />
        <CloseIcon />
    </div>
);

export default Header;