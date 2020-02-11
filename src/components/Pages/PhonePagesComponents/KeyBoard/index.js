import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({updateEnterValue, startCallSession, inComingLineArr, toggleHoldLine}) => {
    return (
        <div
            className={"keyboard-button-group d-flex flex-wrap justify-content-center  align-items-stretch"}>
            {!inComingLineArr.find(elem => elem.callStatus === true) ?
                <PassCallkeyboardGroup
                    updateEnterValue={updateEnterValue}
                /> : <ActiveCallKeyboardGroup
                    toggleHoldLine={toggleHoldLine}
                    updateEnterValue={updateEnterValue}
                />}
        </div>
    );
};

export default Keyboard;