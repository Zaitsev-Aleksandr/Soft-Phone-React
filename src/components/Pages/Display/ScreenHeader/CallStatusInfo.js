import React, {Component} from 'react';

import "./callStatusValue.scss"


class CallStatusInfo extends Component {

    componentDidMount() {
        this.timerID = setInterval(this.props.updateStartTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

render() {
        return (
            <span className={`call-status-value ${this.props.className}`}>
            {this.props.value}
        </span>
        );
    }
}

export default CallStatusInfo;


