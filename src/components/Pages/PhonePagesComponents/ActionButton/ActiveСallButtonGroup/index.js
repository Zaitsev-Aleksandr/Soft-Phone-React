import React from 'react';
import Button from "../../../../common/Button";
import HangUpPhone from "../../../../common/icon/HangUpPhone";
import OffMicro from "../../../../common/icon/OffMic";
import Subvalue from "../../KeyBoard/Subvalue";
import KeyboardIcon from "../../../../common/icon/Keyboard";

const ActiveCallButtonGroup = ({ endCallSession, toggleMicrophoneStatus, keyboardStatus }) => {
    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-around align-items-center">
            <Button
                className="common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"
                value={
                    <>
                        <KeyboardIcon/>
                        <Subvalue
                            className="sub-value-call-board-item d-flex flex-nowrap"
                            subValue={keyboardStatus ? "Скрыть" : "Клавиатура"}
                        />
                    </>
                }
            />

            <Button
                className={"keyboard-action-button hangUp-phone-button"}
                onClick={endCallSession}
                value={<HangUpPhone/>}
            />


            <Button
                className={"common-call-keyboard-button d-flex flex-column align-items-center justify-content-center "}
                onClick={toggleMicrophoneStatus}
                value={
                    <>
                        <OffMicro/>
                        <Subvalue
                            className="sub-value-call-board-item d-flex flex-nowrap"
                            subValue="выключить микрофо"
                        />
                    </>
                }
            />
        </div>
    );
};

export default ActiveCallButtonGroup;
