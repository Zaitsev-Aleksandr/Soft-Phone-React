import React, {Component} from 'react';
import "./index.scss"
import MicrophoneOff from "../../../common/icon/microphone/MicOff";
import MicrophoneOn from "../../../common/icon/microphone/MicOn";


class DisplayFooter extends Component {



    render() {
        return (
            <div className="display-footer-group d-flex flex-nowrap justify-content-between align-items-center">
                 { this.props.microphoneStatus? <MicrophoneOn/> :<MicrophoneOff/>}
            </div>
        );
    }
}

export default DisplayFooter;