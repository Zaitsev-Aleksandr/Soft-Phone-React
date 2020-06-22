import React, {useEffect, useContext} from 'react';

import sound from "../../../../resources/audio/inComingCall.mp3"
import { Link } from 'react-router-dom';
import { AbsolutePatht } from '../../../../Context/Context';

const IncomingCallItem = ({value, endComingCall, startCallSession, arrLength, i}) => {
    const absolutePath =useContext(AbsolutePatht)
    useEffect(() => {
        const audio = new Audio();
        audio.src = sound;
        try {
            void audio.play();
        } catch (e) {
        }
        setTimeout(() => {
            audio.pause();
        }, 2000)
    }, []);


    const clientValue = value[0] ? value[0] : value[1]
    const renderIfComponent = () => {
        if (arrLength < 4) {
            return (<div className="d-flex flex-nowrap">
                <Link to={`${absolutePath}/`} >
                <i className="fas fa-phone" onClick={() => startCallSession(i)}/>
                </Link>
                <i className="fas fa-phone-slash" onClick={() => endComingCall(i)}/>
            </div>)
        } else return <span className="call-status-value incoming-call">Линии заняты</span>
    }
    return (
        <div className="incoming-call-item position-relative d-flex flex-nowrap justify-content-between align-items-center">
            <div className="d-flex flex-column">
                <span className="incoming-call-item__label">Incoming Call...</span>
                <span className="incoming-call-item__value text-nowrap"> {clientValue}</span>
            </div>
            {renderIfComponent()}
        </div>
    );
};

export default IncomingCallItem;