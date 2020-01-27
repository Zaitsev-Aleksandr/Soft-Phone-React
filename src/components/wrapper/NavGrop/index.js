import React from 'react';

import  "./index.scss"
import Button from "../../common/Button";
import "./index.scss"

const NavGroup = () => {
    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-between align-items-center">
            <Button
                className="navigation-call-info-button"
                onClick={()=>alert(true)}
                value="Набор"
            />

            <Button
                className="navigation-call-info-button"
                onClick={()=>alert(true)}
                value="Последние"
            />


            <Button
                className="navigation-call-info-button"
                onClick={()=>alert(true)}
                value="Контакты"
            />
        </div>
    );
};

export default NavGroup;
