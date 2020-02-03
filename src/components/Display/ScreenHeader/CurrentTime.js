import React from 'react';

const CurrentTime = ({currentTime}) => {

    return (
        <div className="current-time-phone-screen d-flex flex-nowrap justify-content-center align-items-center ">
            <i className="far fa-clock"/>{currentTime}
        </div>
    );
};

export default CurrentTime;
