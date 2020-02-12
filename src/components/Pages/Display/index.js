import React from 'react';
import "./index.scss"
import DisplayHeader from "./ScreenHeader";
import CommonContact from "./CommonContactInfo";
import ActiveCallDisplay from "./ActivCallDisplay";


const ScreenGroup = ({updateContactValue, updateEnterValue, inComingLineArr, runCallTimer, microphoneStatus,  enterValue, contactValueName, contactValueNumber}) => {

    return (
        <div className="phone-screen-block d-flex flex-column">
            <DisplayHeader

            />

            {inComingLineArr.find(elem=>elem.displayValue &&  elem.callStatus === true)? <ActiveCallDisplay
                runCallTimer={runCallTimer}
                inComingLineArr={inComingLineArr}
                microphoneStatus={microphoneStatus}
            /> :
               <CommonContact
                enterValue={enterValue}
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}

                />
            }


        </div>
    );
};

export default ScreenGroup;
