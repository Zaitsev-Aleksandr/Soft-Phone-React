import React from 'react';
import "./index.scss"
import DisplayHeader from "./ScreenHeader";
import CommonContact from "./CommonContactInfo";
import DisplayFooter from "./DisplayFooter";

const ScreenGroup = ({updateContactValue, updateEnterValue, inComingLineArr, microphoneStatus, enterValue, contactValueName, contactValueNumber}) => {
    return (
        <div className="phone-screen-block d-flex flex-column">
            <DisplayHeader

            />
            <CommonContact
                enterValue={enterValue}
                contactValueName ={contactValueName}
                contactValueNumber={contactValueNumber}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}

            />
            {inComingLineArr.find(elem => elem.callStatus === true) ? <DisplayFooter
                microphoneStatus={microphoneStatus}
            /> : ""}
        </div>
    );
};

export default ScreenGroup;
