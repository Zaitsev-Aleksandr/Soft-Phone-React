import React from 'react';
import {Link} from 'react-router-dom'
import "./index.scss"

const textNodeArr = [
    {value: "Набор", link: "/softPhone"},
    {value: "Последние", link: "/LastCall"},
    {value: "Контакты", link: "/ContactPage"}
];

const NavGroup = ({conferenceStatus, inComingLineArr, activeElem,setActiveElem}) => {

       const navigationButton = () => (
        textNodeArr.map((elem, i) => (
            <li className="navigation-item d-flex flex-nowrap justify-content-center align-items-center"  key={i} >
                <Link
                    className={`navigation-call-info-link  ${i === activeElem ? "active":""}`}
                    onClick={() => setActiveElem(i)}
                    to={elem.link}>{elem.value}
                </Link>
            </li>
        )));


    return (
        <ul className={`navigation d-flex flex-nowrap justify-content-between align-items-center ${!inComingLineArr.find(elem => elem.callStatus && elem.displayValue && !conferenceStatus) ? "" : "disabled"}`}>
            {navigationButton()}
        </ul>
    );
};

export default NavGroup;
