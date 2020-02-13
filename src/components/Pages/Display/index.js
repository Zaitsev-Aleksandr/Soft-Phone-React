import React from 'react';
import "./index.scss"
import DisplayHeader from "./ScreenHeader";
import ActiveCallDisplay from "./ActivCallDisplay";
import CommonContact from "./CommonContactInfo";


const ScreenGroup = ({updateContactValue, updateEnterValue, inComingLineArr, runCallTimer, microphoneStatus, enterValue, contactValueName, contactValueNumber, conferenceStatus}) => {
    const renderIfComponent = () => {

        if (inComingLineArr.find(elem => elem.displayValue && elem.callStatus === true && conferenceStatus === false)) {
            return <ActiveCallDisplay
                runCallTimer={runCallTimer}
                inComingLineArr={inComingLineArr}
                microphoneStatus={microphoneStatus}
            />
        } else if (conferenceStatus === true) {
            return <>
                <ActiveCallDisplay
                    runCallTimer={runCallTimer}
                    inComingLineArr={inComingLineArr}
                    microphoneStatus={microphoneStatus}
                />
                < CommonContact
                    enterValue={enterValue}
                    contactValueName={contactValueName}
                    contactValueNumber={contactValueNumber}
                    inComingLineArr={inComingLineArr}
                    updateContactValue={updateContactValue}
                    updateEnterValue={updateEnterValue}
                />
            </>
        } else {
            return <CommonContact
                enterValue={enterValue}
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}
            />
        }

    };


    return (
        <div className="phone-screen-block d-flex flex-column">
            <DisplayHeader/>


            {renderIfComponent()}

        </div>
    );
};

export default ScreenGroup;
