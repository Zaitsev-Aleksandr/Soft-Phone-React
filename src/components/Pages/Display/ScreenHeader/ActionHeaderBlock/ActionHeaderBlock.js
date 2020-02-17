import React from 'react';
import CallStatusInfo from "../CallStatusInfo";
import SearchSettingButtonGroup from "../SearchSettingButtonGroup";
import Timer from "../TimerCallSeshion";

const ActionHeaderBlock = ({inComingLineArr}) => {

    const actionElem = () => {
        if (inComingLineArr.find(elem => elem.callStatus)) {
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
            return <SearchSettingButtonGroup/>
        }
    };

    return (
        <div className="action-screen-header-block d-flex justify-content-end align-items-center flex-nowrap">
            {actionElem()}
        </div>
    );
};

export default ActionHeaderBlock;
