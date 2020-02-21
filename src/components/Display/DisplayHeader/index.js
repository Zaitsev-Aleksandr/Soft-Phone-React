import React, {Component} from 'react';
import ActionHeaderBlock from "./ActionHeaderBlock/ActionHeaderBlock";
import CurrentTime from "./TimeValue/CurrentTime";


class DisplayHeader
    extends Component {


    state = {
        currentTime: new Date(),
    };


    updateTime = () => {
        this.setState({
            currentTime: new Date()
        })
    };


    componentDidMount() {
        this.timerID = setInterval(this.updateTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {


        return (
            <div className="screen-header-group d-flex flex-nowrap justify-content-between align-items-center w-100">
                <CurrentTime
                    currentTime={this.state.currentTime.toLocaleTimeString()}
                    updateTime={this.updateTime}
                />

                <ActionHeaderBlock
                    inComingLineArr={this.props.inComingLineArr}
                />

            </div>
        )
    }
}

export default DisplayHeader;

