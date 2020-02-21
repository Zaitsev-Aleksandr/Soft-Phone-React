import React, {Component} from 'react';

class Timer extends Component {

    state = {
        timeValue: {
            seconds: "00",
            minutes: "00",
        }

    };

    updateStartItemTime = () => {
        if (this.props.inComingLineArr.find(elem => elem.displayValue && elem.callStatus )) {
            const subTotalTime = Date.now() - this.props.inComingLineArr.find(elem => elem.displayValue).startCallTime;
            const subTotalSecond = Math.floor(((subTotalTime / 1000) % 60));
            const subTotalMinutes = Math.floor((subTotalTime / 60000));
            this.setState({
                timeValue: {
                    seconds: subTotalSecond.toString().length < 2 ? "0" + subTotalSecond : subTotalSecond,
                    minutes: subTotalMinutes.toString().length < 2 ? "0" + subTotalMinutes : subTotalMinutes,
                }
            })
        }
       else{
            this.setState({
                timeValue: {
                    seconds: "--",
                    minutes:"--"
                }
            })
        }
    };


    componentDidMount() {
        this.timerID = setInterval(() => {
            this.updateStartItemTime()
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (

            <div className="call-timer">
                <i className="fas fa-stopwatch mx-2"/>{`${this.state.timeValue.minutes}:${this.state.timeValue.seconds}`}
            </div>
        )
    }
};


export default Timer;

