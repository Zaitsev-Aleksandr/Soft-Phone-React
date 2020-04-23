import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({updateEnterValue, toggleConferenceStatus, endCallSession, conferenceStatus, inComingLineArr, keyboardStatus, toggleHoldLine}) => {
    const ifCondition = !inComingLineArr.find(elem => elem.callStatus) || conferenceStatus || (keyboardStatus.open && !keyboardStatus.active );
    const renderIfComponent = () => {
        if(ifCondition){
            return (
                <PassCallkeyboardGroup
                    endCallSession={endCallSession}
                    keyboardStatus={keyboardStatus}
                    updateEnterValue={updateEnterValue}
                />
            )
        }
        else  if (inComingLineArr.find(elem => elem.callStatus && elem.displayValue) && keyboardStatus.active){
            return (
                <ActiveCallKeyboardGroup
                    keyboardStatus={keyboardStatus}
                    inComingLineArr={inComingLineArr}
                    toggleConferenceStatus={toggleConferenceStatus}
                    toggleHoldLine={toggleHoldLine}
                />
            )
        }
    }

    return (
        <div
            className={`keyboard-button-group  justify-content-between  align-items-center 
            ${ifCondition?"pass-keyboard-button-group":"active-keyboard-button-group" }
            ${(keyboardStatus.open && !keyboardStatus.active &&  !inComingLineArr.find(elem => elem.callStatus) ) ? "hide" : ""}
            ${!keyboardStatus.open && keyboardStatus.active && inComingLineArr.find(elem => elem.callStatus && elem.displayValue)?"active": ""}
            `}
        >
            {renderIfComponent()}
        </div>
    );
};

export default Keyboard;