import React, {Component} from 'react';

import DisplayGroup from "../../../../Display";
import LineGroup from "./../../LineGroup";
import Keyboard from "./../../KeyBoard";
import ActionButtonGroup from "./../../ActionButton";


class EnterNumberPage extends Component {
    state = {
        callStatus: false,
        keyboardStatus: true,
        holdLine:false,
        transferCall: false
    };

    reloadCallState = () =>{
        this.setState({
            callStatus: false,
            keyboardStatus: true,
            holdLine:false,
            transferCall: false
        })
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
        );
    };
    toggleTransfer =()=>{
        this.setState({
            transferCall:!this.state.transferCall
        })
    };


    render() {
        return (
            <>

                <DisplayGroup
                    callStatus={this.state.callStatus}
                    contactValueName={this.props.contactValueName}
                    contactValueNumber={this.props.contactValueNumber}
                    enterValue={this.props.enterValue}
                    updateEnterValue={this.props.updateEnterValue}
                    addSearch={this.props.addSearch} />
                <LineGroup
                    callStatus={this.state.callStatus}
                    holdLine={this.state.holdLine}
                />

                <Keyboard
                    updateEnterValue={this.props.updateEnterValue}
                    toggleTransfer={this.toggleTransfer}
                    transferCall ={this.state.transferCall}
                    toggleHoldLine={this.toggleHoldLine}
                    toggleCallStatus={this.toggleCallStatus}
                    keyboardStatus={this.state.keyboardStatus}
                    callStatus={this.state.callStatus}

                />

                <ActionButtonGroup
                    reloadCallState={this.reloadCallState}
                    reloadState={this.props.reloadState}
                    updateEnterValue={this.props.updateEnterValue}
                    toggleHoldLine={this.toggleHoldLine}
                    toggleTransfer={this.toggleTransfer}
                    transferCall ={this.state.transferCall}
                    keyboardStatus={this.state.keyboardStatus}
                    callStatus={this.state.callStatus}
                    toggleCallStatus={this.toggleCallStatus}
                    toggleKeyboard={this.toggleKeyboard}
                />

            </>
        );
    }
}

export default EnterNumberPage;