import React, {useEffect} from 'react';

import sound from "./../../../resources/audio/inComingCall.mp3"

const IncomingCallItem = ({value, endComingCall, startCallSession, i}) => {
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
    return (
        <div className="incoming-call-item position-relative d-flex flex-nowrap align-items-center">

            <div className="d-flex flex-column">
                <span className="incoming-call-item__label">Incoming Call...</span>
                <span className="incoming-call-item__value text-nowrap"> {value[0]}</span>
            </div>
            <div className="d-flex flex-nowrap">
                <i className="fas fa-phone" onClick={startCallSession}/>
                <i className="fas fa-phone-slash" onClick={() => endComingCall(value[1])}/>
                <i className="fas fa-volume-mute"/>
            </div>

        </div>
    );
};

export default IncomingCallItem;