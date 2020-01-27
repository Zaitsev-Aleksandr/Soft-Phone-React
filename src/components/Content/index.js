import React, {Component} from 'react';

import "./index.scss"
import ScreenGroup from "../wrapper/ScreenGroup";
import LineGroup from "../wrapper/LineGroup";
import Keyboard from "../wrapper/KeyBoard";
import ActionButtonGroup from "../wrapper/ActionButton";
import NavGroup from "../wrapper/NavGrop";


class Index extends Component {
    state = {
        isActive: false
    };

    makeCall = () => {
        this.setState({ isActive: true });
    };

    hangUp = () => {
        this.setState({ isActive: false });
    };

    render() {
        return (
            <div className="content-wrapper d-flex flex-column w-100 h-100">
                <ScreenGroup/>
                <LineGroup/>
                <Keyboard className="common-keyboard-button d-flex flex-column  align-items-center"/>
                <ActionButtonGroup
                    isActive={this.state.isActive}
                    makeCall={this.makeCall}
                    hangUp={this.hangUp}
                />
                <NavGroup/>
            </div>
        );
    }
}

export default Index;