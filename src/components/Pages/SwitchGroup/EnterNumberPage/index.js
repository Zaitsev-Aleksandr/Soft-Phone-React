import React from 'react';

import DisplayGroup from "../../Display";
import LineGroup from "../../PhonePagesComponents/LineGroup";
import Keyboard from "../../PhonePagesComponents/KeyBoard";
import ActionButtonGroup from "../../PhonePagesComponents/ActionButton";


const EnterNumberPage = ({callStatus, keyboardStatus, transferCall, microphoneStatus, searchActive, enterValue, personName, personNumber, conferenceStatus, inComingLineArr, endCallSomeLine}) => {
    return (
        <>

            <DisplayGroup
                callStatus={callStatus}
                keyboardStatus={keyboardStatus}
                transferCall={transferCall}
                microphoneStatus={microphoneStatus}
                searchActive={searchActive}
                enterValue={enterValue}
                personName={personName}
                personNumber={personNumber}
                conferenceStatus={conferenceStatus}
                inComingLineArr={inComingLineArr}
                endCallSomeLine={endCallSomeLine}
            />
            <LineGroup
                callStatus={callStatus}
                keyboardStatus={keyboardStatus}
                transferCall={transferCall}
                microphoneStatus={microphoneStatus}
                searchActive={searchActive}
                enterValue={enterValue}
                personName={personName}
                personNumber={personNumber}
                conferenceStatus={conferenceStatus}
                inComingLineArr={inComingLineArr}
                endCallSomeLine={endCallSomeLine}
            />

            <Keyboard
                callStatus={callStatus}
                keyboardStatus={keyboardStatus}
                transferCall={transferCall}
                microphoneStatus={microphoneStatus}
                searchActive={searchActive}
                enterValue={enterValue}
                personName={personName}
                personNumber={personNumber}
                conferenceStatus={conferenceStatus}
                inComingLineArr={inComingLineArr}
                endCallSomeLine={endCallSomeLine}
            />

            <ActionButtonGroup
                callStatus={callStatus}
                keyboardStatus={keyboardStatus}
                transferCall={transferCall}
                microphoneStatus={microphoneStatus}
                searchActive={searchActive}
                enterValue={enterValue}
                personName={personName}
                personNumber={personNumber}
                conferenceStatus={conferenceStatus}
                inComingLineArr={inComingLineArr}
                endCallSomeLine={endCallSomeLine}
            />

        </>
    );
};


export default EnterNumberPage;