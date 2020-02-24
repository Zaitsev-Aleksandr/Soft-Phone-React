import React from 'react';
import Button from "../../common/Button";
import "./index.scss"

const lineValueArr = [1, 2, 3, 4];

const LineGroup = ({inComingLineArr, changeCallLine}) => {
    requestAnimationFrame(() => {
        const onHold = document.querySelectorAll(".on-hold");
        onHold.forEach(elem => elem.classList.remove("on-hold"));

        requestAnimationFrame(() => {
            onHold.forEach(elem => elem.classList.add("on-hold"))
        });
    });

    const buttonGroup = () => (
        lineValueArr.map((value, i) => (
            <Button
                className={`incoming-line-button-item ${inComingLineArr[i].callStatus && !inComingLineArr[i].holdLine ? "active" : ""} ${inComingLineArr[i].holdLine ? "on-hold" : ""} `}
                value={`Линия ${value}`}
                key={value}
                onClick={() => changeCallLine(i)}
            />
        ))
    );

    return (
        <>
            <div className="incoming-button-block d-flex flex-nowrap justify-content-between align-items-center py-1">
                {buttonGroup()}
            </div>
        </>
    );
};

export default LineGroup;