import React, {useState} from 'react';
import ConferenceItem from "./ConferenceCallItem";
import UpArrow from "../../common/icon/arrow/UpArrow";
import HangUpPhone from "../../common/icon/HangUpPhone";
import UnCombine from "../../common/icon/arrow/UnCombine";

const ConferenceBlock = ({commonConferenceArr,endCallSession, inComingLineArr, unCombineConference}) => {
    const [activeStatus, toggleStatus] = useState(false)
     const childrenDiv = (
        <div className="d-flex flex-nowrap">
            <HangUpPhone onClick={endCallSession}/>
            <UnCombine onClick={unCombineConference}/>
        </div>)
    const openOreCloseConferenceBlock = () => {
        toggleStatus(!activeStatus)
    }
    const activeClassName = (e) => {
        if (activeStatus) {
            return "active"
        } else {
            return ""
        }
    }
    const conferencePersonItem = commonConferenceArr.map((elem, i) => {
        return <ConferenceItem
            key={i}
            children={childrenDiv}
            clientValue={[commonConferenceArr[i].contactValueName, commonConferenceArr[i].contactValueNumber]}
            inComingLineArr={inComingLineArr}
        />
    })
    return (
        <div className={`conference-common-wrapper d-flex flex-column  ${activeClassName()}`}>
            <div className="common-block-title pl-3 d-flex flex-column align-items-start position-relative">
                Конференция
                <p className="common-subscriber-quantity m-0">Участников {commonConferenceArr.length} </p>
                <UpArrow
                    className={activeClassName()}
                    onClick={openOreCloseConferenceBlock}
                />
            </div>
            <div className="conference-person-block d-flex flex-column align-items-start overflow-auto">
                {conferencePersonItem}
            </div>

        </div>
    );
};

export default ConferenceBlock;
