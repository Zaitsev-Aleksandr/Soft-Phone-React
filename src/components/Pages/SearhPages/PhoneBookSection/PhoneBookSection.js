import React from 'react';
import PhoneBookItem from "./phoneBookItem";
import {Link} from 'react-router-dom'


const PhoneBookSection = ({searchArr, updateContactValue, absolutePath}) => {
    const items = searchArr.map((elem, i) =>
        <Link className="navigation-call-info-link "
              to={`${ absolutePath}/`}
              key={i}
                    >
            <PhoneBookItem
                elem={elem}
                updateContactValue={updateContactValue} name={elem.name ? `${elem.name}` : ""}
                           />
        </Link>);

    return (
        <>
            <span className="head-line-phone-book">Последние поиск. запросы</span>
            <div className="phone-book-section d-flex flex-column overflow-auto">
                {items}
            </div>
        </>

    );
};

export default PhoneBookSection;
