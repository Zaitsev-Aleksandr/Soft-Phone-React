import React from 'react';
import "./index.scss"

import PassCallButtonGroup from "./PassCallButtonGroup";
import ActiveCallButtonGroup from "./ActiveСallButtonGroup";

const ActionButtonGroup = ({startCallSession, toggleMicrophoneStatus, endCallSession, keyboardStatus, inComingLineArr}) => {

    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-around align-items-center">
            {!inComingLineArr.find(elem => elem.callStatus === true) ?
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

