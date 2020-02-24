import React from 'react';

import DisplayGroup from "../../../Display";
import LineGroup from "../../../PhonePagesComponents/LineGroup";
import Keyboard from "../../../PhonePagesComponents/KeyBoard";
import ActionButtonGroup from "../../../PhonePagesComponents/ActionButton";


const EnterNumberPage = ({
                             activeStyle,
                             toggleStyleSoftPhone,
                             toggleKeyboard,
                             changeCallLine,
                             endCallSession,
                             toggleConferenceStatus,
                             conferenceStatus,
                             toggleMicrophoneStatus,
                             microphoneStatus,
                             toggleHoldLine,
                             startCallSession,
                             keyboardStatus,
                             inComingLineArr,
                             updateEnterValue,
                             updateContactValue,
                             enterValue,
                             contactValueName,
                             contactValueNumber,
                             addConferencePerson,
                             commonConferenceArr
                         }) => {
    return (
        <>
            <DisplayGroup
                activeStyle={activeStyle}
            toggleStyleSoftPhone={toggleStyleSoftPhone}
                addConferencePerson={addConferencePerson}
                commonConferenceArr={commonConferenceArr}
                toggleHoldLine={toggleHoldLine}
                conferenceStatus={conferenceStatus}
                enterValue={enterValue}
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                microphoneStatus={microphoneStatus}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}
            />
            <LineGroup
                inComingLineArr={inComingLineArr}
                changeCallLine={changeCallLine}
            />

            <Keyboard
                addConferencePerson={addConferencePerson}
                toggleConferenceStatus={toggleConferenceStatus}
                conferenceStatus={conferenceStatus}
                toggleHoldLine={toggleHoldLine}
                endCallSession={endCallSession}
                startCallSession={startCallSession}
                keyboardStatus={keyboardStatus}
                updateEnterValue={updateEnterValue}
                inComingLineArr={inComingLineArr}
            />

            <ActionButtonGroup
                toggleKeyboard={toggleKeyboard}
                conferenceStatus={conferenceStatus}
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