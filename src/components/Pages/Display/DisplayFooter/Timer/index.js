import React from 'react';

const Timer = ({seconds,minutes}) => {
    return (
        <div className="call-timer">
            <i className="fas fa-stopwatch mx-2"/>{`${minutes}:${seconds}`}
        </div>
    );
};

export default Timer;
