import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({updateEnterValue, toggleConferenceStatus, conferenceStatus, inComingLineArr, toggleHoldLine}) => {
    return (
        <div
            className={"keyboard-button-group d-flex flex-wrap justify-content-center  align-items-stretch"}>
            {!inComingLineArr.find(elem => elem.callStatus) || conferenceStatus || (!inComingLineArr.find(elem => elem.callStatus && elem.displayValue) )?
                <PassCallkeyboardGroup
                    updateEnterValue={updateEnterValue}
                /> : <ActiveCallKeyboardGroup
                    toggleConferenceStatus={toggleConferenceStatus}
                    toggleHoldLine={toggleHoldLine}

                />}
        </div>
    );
};

export default Keyboard;