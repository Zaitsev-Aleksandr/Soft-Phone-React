import React from 'react';

import DisplayGroup from "../../Display";
import LineGroup from "../../PhonePagesComponents/LineGroup";
import Keyboard from "../../PhonePagesComponents/KeyBoard";
import ActionButtonGroup from "../../PhonePagesComponents/ActionButton";


const EnterNumberPage = ({callStatus, startCallSession, toggleActiveCall,activeCall, keyboardStatus,  enterValue, toggleCallStatus, inComingLineArr, updateEnterValue, updateContactValue}) => {
    return (
        <>
            <DisplayGroup
                enterValue={enterValue}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}
            />
            <LineGroup
                inComingLineArr={inComingLineArr}

            />

            <Keyboard
                activeCall={activeCall}
                keyboardStatus={keyboardStatus}
                updateEnterValue={updateEnterValue}
                callStatus={callStatus}

            />

            <ActionButtonGroup
                startCallSession={startCallSession}
                keyboardStatus={keyboardStatus}
                toggleActiveCall={toggleActiveCall}
                activeCall={activeCall}
                inComingLineArr={inComingLineArr}
                callStatus={callStatus}
                toggleCallStatus={toggleCallStatus}
                       />

        </>
    );
};


export default EnterNumberPage;