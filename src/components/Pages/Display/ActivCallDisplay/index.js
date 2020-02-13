import React from 'react';
import DisplayFooter from "../DisplayFooter";
import SubscriberValue from "./SubscriberValue";

const ActiveCallDisplay = ({ runCallTimer, inComingLineArr, microphoneStatus }) => {
    return (
        <>
            <SubscriberValue
                inComingLineArr={inComingLineArr}
            />
                <DisplayFooter
                    runCallTimer={runCallTimer}
                    inComingLineArr={inComingLineArr}
                    microphoneStatus={microphoneStatus}
                />

        </>
    );
};

export default ActiveCallDisplay;
