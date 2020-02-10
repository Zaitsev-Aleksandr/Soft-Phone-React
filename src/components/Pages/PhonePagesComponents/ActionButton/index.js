import React from 'react';
import "./index.scss"

import PassCallButtonGroup from "./PassCallButtonGroup";
import ActiveCallButtonGroup from "./ActiveСallButtonGroup";

const ActionButtonGroup = ({ startCallSession, keyboardStatus, toggleActiveCall, activeCall, inComingLineArr, toggleCallStatus }) => {
    const checkOpenCallSession = ()=>{
      return inComingLineArr.findIndex(elem=>elem.callStatus === false)
    };
    console.log(checkOpenCallSession());

    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-around align-items-center">
            {!activeCall ?
                <PassCallButtonGroup toggleActiveCall={toggleActiveCall} keyboardStatus={keyboardStatus}/> :
                <ActiveCallButtonGroup toggleActiveCall={toggleActiveCall} keyboardStatus={keyboardStatus}/>}
        </div>
    );
};

export default ActionButtonGroup;

