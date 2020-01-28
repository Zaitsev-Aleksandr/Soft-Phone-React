import React, {Component} from 'react';

import "./index.scss"
import ScreenGroup from "../wrapper/ScreenGroup";
import LineGroup from "../wrapper/LineGroup";
import Keyboard from "../wrapper/KeyBoard";
import ActionButtonGroup from "../wrapper/ActionButton";
import NavGroup from "../wrapper/NavGrop";


class Content extends Component {
    state = {
        callStatus: false,
        keyboardStatus: true,
        holdLine:false,
        transferCall: false
    };

    toggleCallStatus = () => {
        this.setState({
            callStatus:!this.state.callStatus
            }
        )
    };

    toggleKeyboard = () => {
        this.setState({
            keyboardStatus: !this.state.keyboardStatus
        });
    };
    toggleHoldLine = () => {
             this.setState({
            holdLine:!this.state.holdLine
            }
        )
    };
    toggleTransfer =()=>{
        this.setState({
            transferCall:!this.state.transferCall
        })
    };



    render() {
        return (
            <div className="content-wrapper d-flex flex-column justify-content-around w-100 h-100">
                <ScreenGroup/>
                <LineGroup
                    holdLine={this.state.holdLine}
                />

                <Keyboard
                    toggleTransfer={this.toggleTransfer}
                    transferCall ={this.state.transferCall}
                    toggleHoldLine={this.toggleHoldLine}
                    toggleCallStatus={this.toggleCallStatus}
                    keyboardStatus={this.state.keyboardStatus}
                    callStatus={this.state.callStatus}

                />

                <ActionButtonGroup
                    toggleTransfer={this.toggleTransfer}
                    transferCall ={this.state.transferCall}
                    keyboardStatus={this.state.keyboardStatus}
                    callStatus={this.state.callStatus}
                    toggleCallStatus={this.toggleCallStatus}
                    toggleKeyboard={this.toggleKeyboard}
                />
                <NavGroup/>
            </div>
        );
    }
}

export default Content;