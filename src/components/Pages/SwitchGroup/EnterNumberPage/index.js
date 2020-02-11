import React from 'react';

import DisplayGroup from "../../Display";
import LineGroup from "../../PhonePagesComponents/LineGroup";
import Keyboard from "../../PhonePagesComponents/KeyBoard";
import ActionButtonGroup from "../../PhonePagesComponents/ActionButton";


const EnterNumberPage = ({ endCallSession, toggleMicrophoneStatus, microphoneStatus, toggleHoldLine, startCallSession, keyboardStatus, inComingLineArr, updateEnterValue, updateContactValue, enterValue, contactValueName,contactValueNumber}) => {
    return (
        <>
            <DisplayGroup
                enterValue={enterValue}
                contactValueName ={contactValueName}
                contactValueNumber={contactValueNumber}
                microphoneStatus={microphoneStatus}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}
            />
            <LineGroup
                 inComingLineArr={inComingLineArr}

            />

            <Keyboard
                toggleHoldLine={toggleHoldLine}
                endCallSession={endCallSession}
                startCallSession={startCallSession}
                keyboardStatus={keyboardStatus}
                updateEnterValue={updateEnterValue}
                 inComingLineArr={inComingLineArr}


            />

            <ActionButtonGroup
                toggleMicrophoneStatus={toggleMicrophoneStatus}
                endCallSession={endCallSession}
                startCallSession={startCallSession}
                keyboardStatus={keyboardStatus}
                inComingLineArr={inComingLineArr}
                           />

        </>
    );
};


export default EnterNumberPage;