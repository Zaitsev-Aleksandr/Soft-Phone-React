import React from "react";
import "./virtualMonitorBlock.scss";
import Callinfo from "./input/Callinfo"
import CommonSpan from "./input/CommonSpan";

const VirtualMonitorBlock = () => {
    return (
        <div  className="virtual-monitor-block overflow-hidden d-flex flex-column align-items-center justify-content-between h-100 ">

            <div className="timer-input d-flex flex-nowrap align-items-center w-100">
                <i className="far fa-clock mr-1"/>
                <CommonSpan className="local-time-value" clientValue={new Date().toLocaleTimeString()}/>
                <CommonSpan className="time-value" clientValue="Соединение"/>
            </div>

            <Callinfo clientNumber="+38 097 467 44 87" clientName="Салтыков Юрий Петрович"/>

            <div className="timer-input d-flex flex-nowrap align-items-center w-100">
                <i className="fas fa-stopwatch"/>
                <CommonSpan className="time-value" clientValue="00:00"/>
                <CommonSpan className={"text-nowrap text-right"} clientValue="sip : 908"/>
            </div>
        </div>
    )
};


export default VirtualMonitorBlock
