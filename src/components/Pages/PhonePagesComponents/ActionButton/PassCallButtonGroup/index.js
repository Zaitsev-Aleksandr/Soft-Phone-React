import React from 'react';
import Button from "../../../../common/Button";
import MakeCall from "../../../../common/icon/MakeCall";
import BackSpace from "../../../../common/icon/BackSpase";
import KeyboardIcon from "../../../../common/icon/Keyboard";
import Subvalue from "../../KeyBoard/Subvalue";

const PassCallButtonGroup = ({keyboardStatus ,startCallSession  }) => {
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
                className={" keyboard-action-button  make-call-button"}
                onClick={startCallSession}
                value={<MakeCall/>}
            />


            <Button
                className={"common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"}
                value={<BackSpace/>}
            />
        </div>
    );
};

export default PassCallButtonGroup;
