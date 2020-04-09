import React from 'react';
import CallStatusInfo from "../CallStatusInfo";
import SearchSettingButtonGroup from "../SearchSettingButtonGroup";
const ActionHeaderBlock = ({inComingLineArr, }) => {

    const actionElem = () => {
        if (inComingLineArr.find(elem => elem.callStatus&& elem.displayValue)) {
            return (
                <>
                    <CallStatusInfo
                        className="incoming-call"
                        value="Разговор..."
                    />

                </>
            )
        } else {

        }
    };

    return (
        <div className="action-screen-header-block d-flex justify-content-end align-items-center flex-nowrap">
            {actionElem()}
             <SearchSettingButtonGroup />
        </div>
    );
};

export default ActionHeaderBlock;
