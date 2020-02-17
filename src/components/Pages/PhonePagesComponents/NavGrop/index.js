import React from 'react';
import {Link} from 'react-router-dom'

import "./index.scss"


const NavGroup = ( { conferenceStatus, inComingLineArr } ) => {

    const navigationButton =
        <>
            <li className="navigation-item active d-flex flex-nowrap justify-content-between align-items-center">
                <Link className="navigation-call-info-link active" to='/softPhone/'>Набор</Link>
            </li>
            <li className="navigation-item d-flex flex-nowrap justify-content-between align-items-center">
                <Link className="navigation-call-info-link" to='/LastCall'>Последние</Link>
            </li>
            <li className="navigation-item d-flex flex-nowrap justify-content-between align-items-center">
                <Link className="navigation-call-info-link" to='/ContactPage'>Контакты</Link>
            </li>
        </>;

    return (
        <ul className="navigation d-flex flex-nowrap justify-content-between align-items-center">
            {!inComingLineArr.find(elem => elem.callStatus) || conferenceStatus === true || (!inComingLineArr.find(elem => elem.callStatus && elem.displayValue) )? navigationButton: null }
        </ul>
    );
};

export default NavGroup;
