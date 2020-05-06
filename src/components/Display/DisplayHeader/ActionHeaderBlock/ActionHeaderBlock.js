import React from 'react';
import CallStatusInfo from "../CallStatusInfo";
import SearchSettingButtonGroup from "../SearchSettingButtonGroup";

const ActionHeaderBlock = ({inComingLineArr,inComingCallArr,absolutePath}) => {

       const value = () => {
        if (inComingLineArr.find(elem => elem.callStatus && elem.displayValue) && !inComingCallArr.length) {
            return "Вызов..."
        } else if (inComingCallArr.length > 0) {
            return `Входящий... ${inComingCallArr.length}`
        }
    }

    const actionElem = () => {
        if (elem => (elem.callStatus && elem.displayValue) || inComingCallArr.length) {
            return (
                <>
                    <CallStatusInfo
                        className="incoming-call"
                        value={value()}
                    />

                </>
            )
        } else {

        }
    };

    return (
        <div className="action-screen-header-block d-flex justify-content-end align-items-center flex-nowrap">
            {actionElem()}
            <SearchSettingButtonGroup absolutePath={absolutePath}/>
        </div>
    );
};

export default ActionHeaderBlock;
