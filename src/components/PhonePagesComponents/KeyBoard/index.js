import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({updateEnterValue, toggleConferenceStatus, endCallSession,conferenceStatus, inComingLineArr, keyboardStatus, toggleHoldLine}) => {
    const ifCondition=!inComingLineArr.find(elem => elem.callStatus) || conferenceStatus || !keyboardStatus.active || (!inComingLineArr.find(elem => elem.callStatus && elem.displayValue));
    return (
        <div
            className={`keyboard-button-group d-flex justify-content-between  align-items-center 
            ${!keyboardStatus.open ? "closes" : ""} 
            ${!ifCondition ? "active" : ""}`}>

            {ifCondition?
                <PassCallkeyboardGroup
                    endCallSession={endCallSession}
                    keyboardStatus={keyboardStatus}
                    updateEnterValue={updateEnterValue}
                /> :
                <ActiveCallKeyboardGroup
                    keyboardStatus={keyboardStatus}
                   inComingLineArr={inComingLineArr}
                   toggleConferenceStatus={toggleConferenceStatus}
                    toggleHoldLine={toggleHoldLine}

                />}
        </div>
    );
};

export default Keyboard;