import React from 'react';
import DisplayFooter from "../DisplayFooter";
import AbonentValue from "./AbonentValue";

const ActiveCallDisplay = ({ runCallTimer, inComingLineArr, microphoneStatus }) => {
    return (
        <>
            <AbonentValue
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
