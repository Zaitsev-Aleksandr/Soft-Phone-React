import React from 'react';
import CallStatusInfo from "../CallStatusInfo";
import SearchSettingButtonGroup from "../SearchSettingButtonGroup";
import Timer from "../TimerCallSeshion";

const ActionHeaderBlock = ({inComingLineArr, toggleStyleSoftPhone}) => {

    const actionElem = () => {
        if (inComingLineArr.find(elem => elem.callStatus&& elem.displayValue)) {
            return (
                <>
                    <CallStatusInfo
                        className="incoming-call"
                        value="Вызов..."
                    />
                    <Timer inComingLineArr={inComingLineArr}/>
                </>
            )
        } else {
            return <SearchSettingButtonGroup toggleStyleSoftPhone={toggleStyleSoftPhone}/>
        }
    };

    return (
        <div className="action-screen-header-block d-flex justify-content-end align-items-center flex-nowrap">
            {actionElem()}
        </div>
    );
};

export default ActionHeaderBlock;
