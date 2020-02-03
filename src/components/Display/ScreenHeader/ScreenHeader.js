import React, {Component} from 'react';


import CurrentTime from "./CurrentTime";
import ActionHeaderBlock from "./ActionHeaderBlock/ActionHeaderBlock";
import Search from "../../common/icon/Search";
import Menu from "../../common/icon/Menu";
import CallStatusInfo from "./CallStatusInfo";
import {Link} from "react-router-dom";


class ScreenHeader extends Component {

    state = {
        currentTime: new Date(),
        callStatus: {}
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
                        <>
                            <Link className="navigation-call-info-link " to='/SearchPage'> <Search/></Link>
                            <Menu/>
                        </> :
                        <CallStatusInfo className={"incoming-call"} value={"Вызов..."}/>}
                />
            </div>
        );
    }
}

export default ScreenHeader;

