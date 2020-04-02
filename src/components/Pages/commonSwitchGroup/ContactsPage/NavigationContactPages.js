import React from 'react';
import "./index.scss"

const navBarTitle = ["Контакты", "Группы", " Избранные"];

const NavigationContact = ({changeNavActiveElem, navActiveElem}) => {
  const navBarblock = navBarTitle.map((elem, i) => (
            <li className={`navigation-contact-info-item d-flex justify-content-center align-items-center ${navActiveElem === i ? "active" : ""}`}
                key={i}
                onClick={() => changeNavActiveElem(i)}
            >
                {elem}
            </li>
        )
    );

    return (
        <ul className="contact-nav-bar d-flex flex-nowrap justify-content-around align-items-center">
            {navBarblock}
        </ul>
    );
};

export default NavigationContact
