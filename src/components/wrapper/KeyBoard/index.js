import React from 'react';
import Button from "../../common/Button";

import "./index.scss"
import "./statics"
import {callKeyValues, passKeyValues} from "./statics"
import SubValue from "./Subvalue";


const Keyboard = ({toggleCallStatus, toggleHoldLine, toggleTransfer, keyboardStatus, callStatus}) => {
    const onClick = (e, i) => {
        if (callStatus && i === 2) {
            e.currentTarget.classList.toggle("active");
            toggleHoldLine()
        } else if (callStatus) {
            toggleTransfer();
            toggleCallStatus();
                    }
    };

    const item = (callStatus ? callKeyValues : passKeyValues).map((elem, i) => <Button
        className={` d-flex flex-column  align-items-center ${callStatus ? "common-call-keyboard-button" : "common-keyboard-button"}`}
        onClick={(e) => onClick(e, i)}
        value={(
            <>
                {elem.defaultValue}
                <SubValue
                    className={`${callStatus ? "sub-value-call-board-item" : "sub-value-keyboard-item"} d-flex flex-nowrap`}
                    subValue={elem.dropDownItems.reduce((sum, item) => sum + item, "")}
                />
            </>
        )}
        key={i}
    />);

    return (
        <div
            className={`keyboard-button-group d-flex flex-wrap justify-content-between align-items-stretch ${keyboardStatus ? "active" : ""}`}>
            {item}
        </div>
    );
};

export default Keyboard;