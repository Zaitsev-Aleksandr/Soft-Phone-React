import React, {useEffect, useState, useCallback} from 'react';

const Timer = ({inComingLineArr, i}) => {
    const [time, setTime] = useState({minutes: "00", seconds: "00"});

    const runCallTimer = useCallback(() => {
        const subTotalTime = Date.now() - inComingLineArr[i].startCallTime;
        const subTotalSecond = Math.floor(((subTotalTime / 1000) % 60));
        const subTotalMinutes = Math.floor((subTotalTime / 60000));
        const second = subTotalSecond.toString().length < 2 ? "0" + subTotalSecond : subTotalSecond;
        const minute = subTotalMinutes.toString().length < 2 ? "0" + subTotalMinutes : subTotalMinutes;
        setTime({minutes: minute, seconds: second.toString()});
    }, [setTime, i, inComingLineArr]);

    useEffect(() => {
        const timerID = setTimeout(runCallTimer, 1000);
        return () => clearTimeout(timerID);
    },[time, runCallTimer]);

    return (
        <div className="call-timer">
            {`${time.minutes}:${time.seconds}`}
        </div>
    );
};

export default Timer
