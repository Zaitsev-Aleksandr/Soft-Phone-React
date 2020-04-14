import React from 'react';
import "./index.scss"
import IncomingCallItem from "./inComingCallComponents/IncomingCallItem";


const InComingCall = ({inComingCallArr, endComingCall}) => {
       const children = inComingCallArr.map((elem, i) => <IncomingCallItem value={elem} i={i} key={i} endComingCall={endComingCall}/>)

    return (
        <div className="incoming-call-block d-flex flex-column">
            {children}
        </div>
    )
}

export default InComingCall;