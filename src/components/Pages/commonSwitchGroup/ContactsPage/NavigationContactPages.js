import React,  { useState }  from 'react';
import  "./index.scss"

const navBarTitle = ["Контакты", "Группы", " Избранные"];
const NavigationContact = () => {

    const[activeElem, changeActive] =useState(0);

    const navBarblock = navBarTitle.map((elem, i) =>(
            <li className={`navigation-contact-info-item d-flex justify-content-center align-items-center ${ activeElem===i? "active":""}`}
                key={i}
                onClick={()=>changeActive(i)}
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
