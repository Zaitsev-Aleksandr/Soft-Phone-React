import React, {Component} from 'react';
import SipStatus from "../../common/icon/SipStatus";
import Employee from "./Emplouee";

class Sip extends Component {
    render() {
        return (
            <>
            <SipStatus className={this.props.sipStatus}/>
            <Employee sip={"901"} fullName={"Салтыков Юрий Петрович"}/>
            </>
        );
    }
}

export default Sip;