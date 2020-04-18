import React, {useContext} from 'react';
import MicrophoneOn from "../../common/icon/microphone/MicOn";
import MicrophoneOff from "../../common/icon/microphone/MicOff";
import "./index.scss"
import {MicrophoneContext} from "./../../../Context/Context";

const DisplayMicrophone = ({commonConferenceArr, conferenceStatus}) => {
    const { microphoneStatus } = useContext(MicrophoneContext)
    const conferenceClassName = commonConferenceArr.length > 0 || conferenceStatus ? "conference" : ""
    return (
        <div
            className={`display-microphone-block d-flex flex-nowrap justify-content-center align-items-center ${conferenceClassName}`}>
            {microphoneStatus ? <MicrophoneOn/> : <MicrophoneOff/>}
        </div>)
}

export default DisplayMicrophone;