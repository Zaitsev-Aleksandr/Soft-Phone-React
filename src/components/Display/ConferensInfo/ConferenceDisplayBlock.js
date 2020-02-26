import React from 'react';
import ConferenceItem from "./ConferenceCallItem";
import UpArrow from "../../common/icon/arrow/UpArrow";

const ConferenceBlock = ({conference, inComingLineArr,}) => {

    const firsSubscriber = conference[0].contactValueName ? conference[0].contactValueName : conference[0].contactValueNumber
    const secondSubscriber = conference[1].contactValueName ? conference[1].contactValueName : conference[1].contactValueNumber


    return (
        <div className="conference-common-wrapper d-flex flex-column w-100">
            <div className="conference-block-title d-flex flex-column align-items-start position-relative">
                Конференция
                <p className="conference-subscriber-quantity m-0">Участников{conference.length} </p>
                <UpArrow/>
            </div>
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
