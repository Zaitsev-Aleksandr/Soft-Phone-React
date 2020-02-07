import React from 'react';
import Button from "../../../common/Button";
import "./index.scss"
import KeyboardIcon from "../../../common/icon/Keyboard";
import HangUpPhone from "../../../common/icon/HangUpPhone";
import MakeCall from "../../../common/icon/MakeCall";
import BackSpace from "../../../common/icon/BackSpase";
import Subvalue from "../KeyBoard/Subvalue";
import OffMicro from "../../../common/icon/OffMic";
import CloseIcon from "../../../common/icon/CloseIcon";

const ActionButtonGroup = ({updateEnterValue,toggleMicrophoneStatus, reloadCallState, toggleHoldLine, toggleCallStatus, toggleKeyboard, toggleTransfer, keyboardStatus, callStatus, transferCall, reloadState}) => {
    let getElement = () => {
        if (toggleTransfer) {
            return {
                value: <KeyboardIcon/>,
                subValue:
                    <Subvalue
                        className="sub-value-call-board-item d-flex flex-nowrap"
                        subValue={keyboardStatus ? "Скрыть" : "Клавиатура"}
                    />

            }
        } else {
            return {
                value: <CloseIcon/>,
                subValue:
                    <Subvalue
                        className="sub-value-call-board-item d-flex flex-nowrap"
                        subValue="Отмена"
                    />
            }
        }
    };

    const valueComponent = callStatus ?
        <>
            <OffMicro/>
            <Subvalue
                className="sub-value-call-board-item d-flex flex-nowrap"
                subValue="выключить микрофо"
            />
        </> :
        <BackSpace/>;

    const toggleCall = () => {
        toggleCallStatus();
        toggleHoldLine();
        if (callStatus) {
            reloadState();
            reloadCallState()
        }
    };

    const onMicButton=(e)=>{
        e.currentTarget.classList.toggle("active");
        toggleMicrophoneStatus();
    };

    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-around align-items-center">
            <Button
                className="common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"
                onClick={!transferCall ? toggleTransfer : toggleKeyboard}
                value={
                    <>
                        {getElement().value}
                        {getElement().subValue}

                    </>
                }
            />

            <Button
                className={`keyboard-action-button ${callStatus ? "hangUp-phone-button" : "make-call-button"}`}
                onClick={toggleCall}
                value={callStatus ? <HangUpPhone/> : <MakeCall/>}
            />


            <Button
                className={`common-call-keyboard-button d-flex flex-column align-items-center justify-content-center ${!callStatus ? "backspace-button" : ""} `}
                onClick={callStatus ? (e) => onMicButton(e) : updateEnterValue}
                value={valueComponent}
            />
        </div>
    );
};

export default ActionButtonGroup;