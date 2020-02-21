import React from 'react';
import SubscriberValue from "./SubscriberValue";

const ActiveCallDisplay = ({ inComingLineArr}) => {
    return (
        <>
            <SubscriberValue
                inComingLineArr={inComingLineArr}
            />

        </>
    );
};

export default ActiveCallDisplay;
