import React, {Component} from 'react';
import "./index.scss"
import Timer from "./Timer";
import MicrophoneOff from "../../../common/icon/microphone/MicOff";
import MicrophoneOn from "../../../common/icon/microphone/MicOn";


class DisplayFooter extends Component {
    state = {
        startCallTime: Date.now(),
        timeValue: {
            seconds: "00",
            minutes:  "00",
        }

    };

    updateStartTime = () => {
        const subTotalTime = Date.now() - this.state.startCallTime;
        const subTotalSecond = Math.floor(((subTotalTime / 1000) % 60));
        const subTotalMinutes = Math.floor((subTotalTime / 60000));
        this.setState({
            timeValue: {
                seconds: subTotalSecond.toString().length < 2 ? "0" + subTotalSecond : subTotalSecond,
                minutes: subTotalMinutes.toString().length < 2 ? "0" + subTotalMinutes : subTotalMinutes,
            }
        })
    };


    componentDidMount() {
        this.timerID = setInterval(this.updateStartTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <div className="display-footer-group d-flex flex-nowrap justify-content-between">
                <Timer
                    seconds={this.state.timeValue.seconds}
                    minutes={this.state.timeValue.minutes}
                />
                { this.props.microphoneStatus? <MicrophoneOn/> :<MicrophoneOff/>}
            </div>
        );
    }
}

export default DisplayFooter;


