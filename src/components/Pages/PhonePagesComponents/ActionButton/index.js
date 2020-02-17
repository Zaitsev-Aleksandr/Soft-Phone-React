import React from 'react';
import "./index.scss"

import PassCallButtonGroup from "./PassCallButtonGroup";
import ActiveCallButtonGroup from "./ActiveСallButtonGroup";

const ActionButtonGroup = ({startCallSession, conferenceStatus, toggleMicrophoneStatus, endCallSession, keyboardStatus, inComingLineArr}) => {

    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-around align-items-center">
            {!inComingLineArr.find(elem => elem.callStatus) || conferenceStatus === true || (!inComingLineArr.find(elem => elem.callStatus && elem.displayValue) )?
                <PassCallButtonGroup
                    keyboardStatus={keyboardStatus}
                    startCallSession={startCallSession}
                /> :
                <ActiveCallButtonGroup
                    toggleMicrophoneStatus={toggleMicrophoneStatus}
                    keyboardStatus={keyboardStatus}
                    endCallSession={endCallSession}
                />}
        </div>
    );
};

export default ActionButtonGroup;

