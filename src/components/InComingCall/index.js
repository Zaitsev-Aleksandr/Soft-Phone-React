import React, {useContext} from 'react';
import "./index.scss"
import IncomingCallItem from "./inComingCallComponents/IncomingCallItem";
import {EndComingCallContext} from "../../Context/Context";


const InComingCall = ({inComingCallArr, inComingLineArr, takeInComingCall}) => {
    const {endComingCall} = useContext(EndComingCallContext)
    const arrLength = inComingLineArr.filter(elem => elem.callStatus).length
    const children = inComingCallArr.map((elem, i) =>
        <IncomingCallItem value={inComingCallArr[i]}
                          arrLength={arrLength}
                          i={i}
                          key={i}
                          endComingCall={() => endComingCall(i)}
                          startCallSession={takeInComingCall}
        />)
    return (
        <div className="incoming-call-block d-flex flex-column ">
            {children}
        </div>
    )
}

export default InComingCall;