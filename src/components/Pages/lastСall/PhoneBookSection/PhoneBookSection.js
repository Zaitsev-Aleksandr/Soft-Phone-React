import React from 'react';
import PhoneBookItem from "./PhoneBookItem";
import {Link} from "react-router-dom";

const PhoneBookSection = ({searchArr, updateContactValue,absolutePath}) => {
      const items = searchArr.map((elem, i) =>
          <Link className="navigation-call-info-link "
                to={`${absolutePath}/`}
                key={i}
                          >
            <PhoneBookItem
                updateContactValue={updateContactValue}
                elem={elem}
            />
        </Link>);

    return (
        <>
            <span className="head-line-phone-book">Последние</span>
        <div className="phone-book-section d-flex flex-column overflow-auto">
                {items}
        </div>
            </>
    );
};

export default PhoneBookSection;
