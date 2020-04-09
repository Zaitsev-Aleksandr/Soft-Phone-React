import React, {Component} from 'react';
import "./index.scss"
import MicrophoneOff from "../../common/icon/microphone/MicOff";
import MicrophoneOn from "../../common/icon/microphone/MicOn";


class DisplayMicrophone extends Component {



    render() {
        return (
            <div className="display-microphone-block d-flex flex-nowrap justify-content-center align-items-center">
                 { this.props.microphoneStatus? <MicrophoneOn/> :<MicrophoneOff/>}
            </div>
        );
    }
}

export default DisplayMicrophone;