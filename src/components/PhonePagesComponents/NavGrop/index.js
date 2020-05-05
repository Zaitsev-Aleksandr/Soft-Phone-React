import React from 'react';
import {NavLink} from 'react-router-dom'
import "./index.scss"
import "./darkScheme.scss"

const textNodeArr = [
    {value: "Набор", link: "/SoftPhone"},
    {value: "Последние", link: "/LastCall"},
    {value: "Контакты", link: "/ContactPage"}
];

const NavGroup = ({conferenceStatus, inComingLineArr, transferCall}) => {

    const navigationButton = () => (
        textNodeArr.map((elem, i) => (
            <li className="navigation-item d-flex flex-nowrap justify-content-center align-items-center" key={i}>
                <NavLink
                    className="navigation-item-link"
                    to={elem.link}
                    activeClassName="active"
                >
                    {elem.value}
                </NavLink>
            </li>
        )));


    return (
        <ul className={`navigation-board position-relative d-flex flex-nowrap justify-content-between align-items-center w-100 ${!inComingLineArr.find(elem => elem.callStatus && elem.displayValue && !conferenceStatus &&  !transferCall) ? "" : "disabled"}`}>
            {navigationButton()}
        </ul>
    );
};

export default NavGroup;
