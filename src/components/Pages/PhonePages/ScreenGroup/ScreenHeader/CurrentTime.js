import React from 'react';

const CurrentTime = ({currentTime, updateTime}) => {
    setTimeout(updateTime,1000);
    return (
        <div className="current-time-phone-screen d-flex flex-nowrap justify-content-center align-items-center ">
            <i className="far fa-clock"/>{currentTime}
        </div>
    );
};

export default CurrentTime;
