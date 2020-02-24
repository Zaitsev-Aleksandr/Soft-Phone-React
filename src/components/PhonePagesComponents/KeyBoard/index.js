import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({updateEnterValue, toggleConferenceStatus, conferenceStatus, inComingLineArr, keyboardStatus, toggleHoldLine, addConferencePerson}) => {
    return (
        <div
            className={`keyboard-button-group d-flex flex-wrap justify-content-between  align-items-center ${!keyboardStatus.open ? "close" : ""}`}>

            {!inComingLineArr.find(elem => elem.callStatus) || conferenceStatus || !keyboardStatus.active || (!inComingLineArr.find(elem => elem.callStatus && elem.displayValue)) ?

                <PassCallkeyboardGroup
                    updateEnterValue={updateEnterValue}
                /> :
                <ActiveCallKeyboardGroup
                    inComingLineArr={inComingLineArr}
                    addConferencePerson={addConferencePerson}
                    toggleConferenceStatus={toggleConferenceStatus}
                    toggleHoldLine={toggleHoldLine}

                />}
        </div>
    );
};

export default Keyboard;