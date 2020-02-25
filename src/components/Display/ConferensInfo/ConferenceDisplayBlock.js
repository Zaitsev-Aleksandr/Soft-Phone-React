import React from 'react';
import Users from "../../common/icon/Users";
import ConferenceItem from "./ConferenceCallItem";
import UpArrow from "../../common/icon/arrow/UpArrow";

const ConferenceBlock = ({conference,inComingLineArr,}) => {

    const firsSubscriber = conference[0].contactValueName?conference[0].contactValueName:conference[0].contactValueNumber
    const secondSubscriber = conference[1].contactValueName?conference[1].contactValueName:conference[1].contactValueNumber


    return (
        <div className="conference-common-wrapper d-flex flex-column w-100">
            <span className="conference-block-title"> <Users/> Конференция <UpArrow  /> </span>
            <ConferenceItem
                clientValue={firsSubscriber}
                inComingLineArr={inComingLineArr}
            />
            <ConferenceItem
                clientValue={secondSubscriber}
                inComingLineArr={inComingLineArr}
            />
        </div>
    );
};

export default ConferenceBlock;
