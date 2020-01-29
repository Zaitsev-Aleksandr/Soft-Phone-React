import React from 'react';
import Button from "../../../common/Button";
import "./index.scss"

const  lineValueArr=[1,2,3,4];

const LineGroup = ({holdLine}) => {
    const buttonGrope= lineValueArr.map((value, i)=>
        <Button
            className={`incoming-line-button-item ${!holdLine && value===1 ? "active" :""} ${holdLine && value===1 ? "on-hold" :""} `}
            value={`Линия ${value}`}
            key={value}
        />
);
    return (
        <div className="incoming-button-block d-flex flex-nowrap justify-content-between align-items-center py-1">
            {buttonGrope}
        </div>
    );
};

export default LineGroup;
