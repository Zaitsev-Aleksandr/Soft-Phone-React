import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({ updateEnterValue, activeCall }) => {
    return (
        <div
            className={"keyboard-button-group d-flex flex-wrap justify-content-center  align-items-stretch"}>
            {!activeCall? <PassCallkeyboardGroup updateEnterValue={updateEnterValue} /> : <ActiveCallKeyboardGroup updateEnterValue={updateEnterValue}/>}
        </div>
    );
};

export default Keyboard;