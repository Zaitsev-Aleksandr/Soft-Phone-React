import React, {useState} from 'react';

import DisplayGroup from "../../../Display";
import LineGroup from "../../../PhonePagesComponents/LineGroup";
import Keyboard from "../../../PhonePagesComponents/KeyBoard";
import ActionButtonGroup from "../../../PhonePagesComponents/ActionButton";
import { MicrophoneContext } from "./../../../../Context/Context"

const EnterNumberPage = ({
                             removeConference,
                             takeInComingCall,
                             runCallTimer,
                             setConference,
                             toggleKeyboard,
                             changeCallLine,
                             endCallSession,
                             toggleConferenceStatus,
                             conferenceStatus,
                             toggleHoldLine,
                             startCallSession,
                             keyboardStatus,
                             inComingLineArr,
                             updateEnterValue,
                             updateContactValue,
                             enterValue,
                             contactValueName,
                             contactValueNumber,
                             commonConferenceArr,
                             inComingCallArr,
                              }) => {
    const [microphoneStatus, toggleMicrophoneStatus] = useState(true)


    const ifOpenPhoneComponent = () => {

        if (keyboardStatus.open) {
            return (
                <>
                    <Keyboard
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
                        endCallSession={endCallSession}
                        startCallSession={startCallSession}
                        keyboardStatus={keyboardStatus}
                        inComingLineArr={inComingLineArr}
                    />
                </>)
        } else {
            return (
                <div className=" close-keyboard-active-call d-flex flex-nowrap">
                    <Keyboard
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
                        endCallSession={endCallSession}
                        startCallSession={startCallSession}
                        keyboardStatus={keyboardStatus}
                        inComingLineArr={inComingLineArr}
                    />
                </div>
            )
        }

    }
    return (
        < MicrophoneContext.Provider value={{microphoneStatus, toggleMicrophoneStatus} }>
            <>
                <DisplayGroup
                    takeInComingCall={takeInComingCall}
                    keyboardStatus={keyboardStatus}
                    startCallSession={startCallSession}
                    inComingCallArr={inComingCallArr}
                    removeConference={removeConference}
                    endCallSession={endCallSession}
                    setConference={setConference}
                    commonConferenceArr={commonConferenceArr}
                    toggleHoldLine={toggleHoldLine}
                    conferenceStatus={conferenceStatus}
                    enterValue={enterValue}
                    contactValueName={contactValueName}
                    contactValueNumber={contactValueNumber}
                    inComingLineArr={inComingLineArr}
                    updateContactValue={updateContactValue}
                    updateEnterValue={updateEnterValue}
                />
                <LineGroup
                    runCallTimer={runCallTimer}
                    inComingLineArr={inComingLineArr}
                    changeCallLine={changeCallLine}
                />
                {ifOpenPhoneComponent()}
            </>
        </MicrophoneContext.Provider>
    );
};


export default EnterNumberPage;