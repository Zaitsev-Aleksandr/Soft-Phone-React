import React, {useContext} from 'react';
import Button from "../../../common/Button";
import HangUpPhone from "../../../common/icon/HangUpPhone";
import OffMicro from "../../../common/icon/OffMic";
import Subvalue from "../../KeyBoard/Subvalue";
import KeyboardIcon from "../../../common/icon/Keyboard";
import {MicrophoneContext} from "../../../../Context/Context";

const ActiveCallButtonGroup = ({endCallSession, toggleKeyboard, keyboardStatus}) => {
    const {microphoneStatus, toggleMicrophoneStatus} = useContext(MicrophoneContext)
    return (
        <>
            {keyboardStatus.open ? <Button
                className="common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"
                onClick={toggleKeyboard}
                value={
                    <>
                        <KeyboardIcon/>
                        <Subvalue
                            className="sub-value-call-board-item d-flex flex-nowrap"
                            subValue={!keyboardStatus.active ? "Скрыть" : "Клавиатура"}
                        />
                    </>
                }
            /> : ""}

            <Button
                className={"keyboard-action-button hangUp-phone-button"}
                onClick={endCallSession}
                value={<HangUpPhone/>}
            />
            <Button
                className={"common-call-keyboard-button d-flex flex-column align-items-center justify-content-center "}
                onClick={() => toggleMicrophoneStatus(!microphoneStatus)}
                value={
                    <>
                        <OffMicro/>
                        {keyboardStatus.open ? <Subvalue
                            className="sub-value-call-board-item d-flex flex-nowrap"
                            subValue="Выкл. мик"
                        /> : ""}
                    </>
                }
            />
        </>)
};

export default ActiveCallButtonGroup;
