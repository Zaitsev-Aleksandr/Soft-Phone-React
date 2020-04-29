import React from 'react';
import "./index.scss"
import "./darkScheme.scss"

import PassCallButtonGroup from "./PassCallButtonGroup";
import ActiveCallButtonGroup from "./ActiveСallButtonGroup";

const ActionButtonGroup = ({startCallSession, deleteEnterValue,  transferCall, conferenceStatus, toggleKeyboard, endCallSession, keyboardStatus, inComingLineArr}) => {

    return (

        <div className="keyboard-wrapper flex-nowrap justify-content-between align-items-center">
            {!inComingLineArr.find(elem => elem.callStatus) || conferenceStatus ||  transferCall || !inComingLineArr.find(elem => elem.callStatus && elem.displayValue)?
                <PassCallButtonGroup
                    toggleKeyboard={toggleKeyboard}
                    deleteEnterValue={deleteEnterValue}
                    keyboardStatus={keyboardStatus}
                    startCallSession={startCallSession}
                /> :
                <ActiveCallButtonGroup
                    inComingLineArr={inComingLineArr}
                    toggleKeyboard={toggleKeyboard}
                    keyboardStatus={keyboardStatus}
                    endCallSession={endCallSession}
                />}
        </div>
    );
};

export default ActionButtonGroup;

