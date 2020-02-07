import React, {Component} from 'react';


import CurrentTime from "./TimeValue/CurrentTime";
import ActionHeaderBlock from "./ActionHeaderBlock/ActionHeaderBlock";
import CallStatusInfo from "./CallStatusInfo";
import SearchSettingButtonGroup from "./SearchSettingButtonGroup";


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
                    value={!this.props.callStatus ?
                        <SearchSettingButtonGroup/> :
                        <CallStatusInfo
                            className={"incoming-call"}
                            value={"Вызов..."}
                        />}
                />
            </div>
        );
    }
}

export default DisplayHeader;

