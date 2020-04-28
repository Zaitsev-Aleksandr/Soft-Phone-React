import React from 'react';
import "./index.scss"
import {Link} from "react-router-dom";
import SipStatusBlock from "./srttingsElem/SipStatusBlock";
import UiTheme from "./srttingsElem/UiTheme";
import Profile from "./srttingsElem/Profile";

const CommonSettings = ({changeSipStatus}) => {
    return (
        <div className="common-settings-wrapper d-flex flex-column">
            <div
                className="settings-page-header  d-flex flex-nowrap position-relative justify-content-center align-items-center">
                <Link className="info-link-arrow-icon d-flex align-items-center " to='/softPhone'>
                    <i className="fas fa-chevron-left"/>
                </Link>
                <span className="head-line-settings">Настройки</span>
            </div>
            <SipStatusBlock changeSipStatus={changeSipStatus}/>
            <UiTheme />
            <Profile />
        </div>
    );
};

export default CommonSettings;