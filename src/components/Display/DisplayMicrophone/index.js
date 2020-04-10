import React from 'react';
import MicrophoneOn from "../../common/icon/microphone/MicOn";
import MicrophoneOff from "../../common/icon/microphone/MicOff";
import  "./index.scss"

const DisplayMicrophone = ({ commonConferenceArr, conferenceStatus,microphoneStatus }) => {
    console.log("1a",commonConferenceArr.length > 0);
    console.log("1b",conferenceStatus);
    const conferenceClassName = commonConferenceArr.length>0 || conferenceStatus? "conference":""
    return (
        <div className={`display-microphone-block d-flex flex-nowrap justify-content-center align-items-center ${conferenceClassName}`}>
            {microphoneStatus ? <MicrophoneOn/> : <MicrophoneOff/>}
        </div>
    );
}

export default DisplayMicrophone;