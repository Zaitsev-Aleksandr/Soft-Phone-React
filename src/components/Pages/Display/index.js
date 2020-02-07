import React from 'react';
import "./index.scss"
import DisplayHeader from "./ScreenHeader";
import CommonContact from "./CommonContactInfo";
import DisplayFooter from "./DisplayFooter";

const ScreenGroup = ({enterValue,microphoneStatus, updateEnterValue, contactValueName, contactValueNumber, callStatus, updateContactValue}) => {
    return (
        <div className="phone-screen-block d-flex flex-column">
           <DisplayHeader
               callStatus={callStatus}
           />
            <CommonContact
                updateContactValue={updateContactValue}
                callStatus={callStatus}
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                enterValue={enterValue}
                updateEnterValue={updateEnterValue}
            />
            {callStatus? <DisplayFooter
                microphoneStatus={microphoneStatus}
            />:""}
        </div>
    );
};

export default ScreenGroup;
