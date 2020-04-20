import React, {useContext} from 'react';
import MicrophoneOn from "../../common/icon/microphone/MicOn";
import MicrophoneOff from "../../common/icon/microphone/MicOff";
import "./index.scss"
import {MicrophoneContext} from "./../../../Context/Context";

const DisplayMicrophone = () => {
    const { microphoneStatus } = useContext(MicrophoneContext)
    return (
        <div
            className="display-microphone-block d-flex flex-nowrap justify-content-center align-items-center">
            {microphoneStatus ? <MicrophoneOn/> : <MicrophoneOff/>}
        </div>)
}

export default DisplayMicrophone;