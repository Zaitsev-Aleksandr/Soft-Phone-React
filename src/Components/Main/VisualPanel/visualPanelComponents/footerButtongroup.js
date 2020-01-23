import React from 'react';
import Button from "../../../../CommonComponens/Button";
import "./footerButton.scss"
import {toggleHeaghtKeyboard} from "../../../../resources/script/handlerButtonClick";

const FotterButtonGrope = () => {
    return (
        <div className="footer-button-grope d-flex justify-content-center position-relative">
        <Button
                onClick={toggleHeaghtKeyboard}
                className = "footer-toggle-height-button"
                value = {<i className="fas fa-caret-square-down"/>}
                />
        </div>
    );
};

export default FotterButtonGrope;
