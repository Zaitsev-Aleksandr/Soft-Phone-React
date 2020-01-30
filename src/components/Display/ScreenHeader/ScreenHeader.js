import React, {Component} from 'react';
import CurrentTime from "./CurrentTime";
import ActionHeaderBlock from "./ActionHeaderBlock";
import Search from "../../common/icon/Search";
import Menu from "../../common/icon/Menu";
import CallStatusInfo from "./CallStatusInfo";


class ScreenHeader extends Component {

    state = {
        currentTime: new Date()
    };

    updateTime = () => {
        this.setState({
            currentTime: new Date()
        })
    };

render()
{

    return (
        <div className="screen-header-group d-flex flex-nowrap justify-content-between align-items-center w-100">
            <CurrentTime
                currentTime={this.state.currentTime.toLocaleTimeString()}
                updateTime={this.updateTime}
            />
            <ActionHeaderBlock value={!this.props.callStatus? <><Search addSearch={this.props.addSearch}/> <Menu/> </>: <CallStatusInfo className={"incoming-call"} value={"Вызов..."}/>}/>
        </div>
    );
}
}

export default ScreenHeader;

