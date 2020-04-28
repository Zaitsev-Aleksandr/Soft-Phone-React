import React from 'react';
import Button from "../../../common/Button";
import MakeCall from "../../../common/icon/MakeCall";
import BackSpace from "../../../common/icon/BackSpase";
import KeyboardIcon from "../../../common/icon/Keyboard";
import Subvalue from "../../KeyBoard/Subvalue";
import HangUpPhone from "../../../common/icon/HangUpPhone";

const PassCallButtonGroup = ({keyboardStatus,deleteEnterValue, toggleKeyboard, startCallSession, endCallSession}) => {
    const ifClosePhoneComponent = () => {
        if (keyboardStatus.open) {
            return (
                <>
                    <Button
                        className={`common-call-keyboard-button d-flex flex-column align-items-center justify-content-center ${!keyboardStatus.active?"active":""}`}
                        onClick={toggleKeyboard}
                        value={
                            <>
                                <KeyboardIcon />
                                <Subvalue
                                    className="sub-value-call-board-item d-flex flex-nowrap"
                                    subValue={keyboardStatus.active ? "Скрыть" : "Клавиатура"}
                                />
                            </>
                        }
                    />
                    <Button
                        className={" keyboard-action-button  make-call-button"}
                        onClick={startCallSession}
                        value={<MakeCall/>}
                    />


                    <Button
                        className={"common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"}
                        value={<BackSpace/>}
                        onClick={deleteEnterValue}
                    />
                </>
            )
        } else {
            return (
                <div className="d-flex flex-nowrap justify-content-around w-100">
                    <Button
                        className={"keyboard-action-button  make-call-button"}
                        onClick={startCallSession}
                        value={<MakeCall/>}
                    />
                    <Button
                        className={"keyboard-action-button hangUp-phone-button"}
                        onClick={endCallSession}
                        value={<HangUpPhone/>}
                    />
                    <Button
                        className="common-call-volume-button common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"
                        value={<i className="fas fa-volume-mute"/>}

                    />
                </div>
            )
        }
    }
    return ifClosePhoneComponent();
};

export default PassCallButtonGroup;
