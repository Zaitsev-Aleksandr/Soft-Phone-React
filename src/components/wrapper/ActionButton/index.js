import React from 'react';
import Button from "../../common/Button";
import "./index.scss"
import HoldCall from "../../common/icon/HoldCall";
import KeyboardIcon from "../../common/icon/Keyboard";
import HangUpPhone from "../../common/icon/HangUpPhone";
import MakeCall from "../../common/icon/MakeCall";
import RedirectCall from "../../common/icon/RedirectCall";
import BackSpase from "../../common/icon/BackSpase";


const ActionButtonGroup = ({isActive,  hangUp, makeCall}) => {
    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-between align-items-center">
            <Button
                className="common-keyboard-button"
                onClick={()=>alert(true)}
                value={isActive ? <HoldCall/> : <KeyboardIcon />}
            />

            <Button
                className={`keyboard-action-button ${isActive? "hangUp-phone-button": "make-call-button"}`}
                onClick={isActive ? hangUp : makeCall}
                value={isActive? <HangUpPhone/>: <MakeCall/>}
            />

            <Button
                className="common-keyboard-button"
                onClick={()=>alert(true)}
                value={isActive? <RedirectCall/>: <BackSpase/>}
            />
        </div>
    );
};

export default ActionButtonGroup;