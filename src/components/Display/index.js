import React, {useEffect, useState} from 'react';
import "./index.scss"
import DisplayHeader from "./DisplayHeader";
import CommonContact from "./CommonContactInfo";
import DisplayMicrophone from "./DisplayMicrophone";
import ConferenceItem from "./ConferensInfo/ConferenceCallItem";
import Combine from "../common/icon/arrow/Combine";
import ConferenceBlock from "./ConferensInfo/ConferenceDisplayBlock";
import LeftArrow from "../common/icon/arrow/LeftArrow";
import InComingCall from "../InComingCall";
import ActiveCallDisplay from "./ActivCallDisplay";

const ScreenGroup = ({updateContactValue, deleteEnterValue,  keyboardStatus, takeInComingCall, inComingCallArr, removeConference, endCallSession, setConference, commonConferenceArr, updateEnterValue, inComingLineArr, enterValue, contactValueName, contactValueNumber, conferenceStatus}) => {

    const [CONFERENCE_PERSON, toggleConferencePerson] = useState(false)
    useEffect(() => {
        if (commonConferenceArr.length === 0 && inComingLineArr.find(e => e.conferenceActive)) {
            setConference([inComingLineArr.find(e => e.conferenceActive)])
        }
    })
    useEffect(() => {
        if (conferenceStatus) {
            toggleConferencePerson(true)
        }
    }, [conferenceStatus])

    const combineConference = () => {
        toggleConferencePerson(false)
        setConference([...commonConferenceArr, initiatorValue()]);
    };

    const initiatorValue = () => inComingLineArr.find(e => e.displayValue && !e.conferenceActive) ? inComingLineArr.find(e => e.displayValue && e.callStatus) : inComingLineArr.find(e => !e.displayValue && e.callStatus);

    const slaveClientValue = () => {

        const element = inComingLineArr.find(elem => !elem.displayValue);
        return [element.contactValueName, element.contactValueNumber]
    };


    const unCombineConference = () => {
        let newArr = [...commonConferenceArr]
        newArr.pop()
        setConference(newArr);
    };

    const renderIfComponent = () => {
        if (commonConferenceArr.length > 1 && !conferenceStatus && !CONFERENCE_PERSON) {
            return (
                <ConferenceBlock
                    endCallSession={endCallSession}
                    commonConferenceArr={commonConferenceArr}
                    inComingLineArr={inComingLineArr}
                    unCombineConference={unCombineConference}
                />
            )
        } else if (inComingLineArr.find(elem => elem.displayValue && elem.callStatus && !conferenceStatus)) {
            return (
                <>
                    {inComingLineArr.filter(elem => elem.callStatus).length > 1 && CONFERENCE_PERSON ?
                        <ConferenceItem
                            clientValue={slaveClientValue()}
                            className="hold"
                            children={<Combine combineConference={combineConference}/>}
                        /> : null}
                    <ActiveCallDisplay
                        updateEnterValue={updateEnterValue}
                        enterValue={enterValue}
                        keyboardStatus={keyboardStatus}
                        inComingLineArr={inComingLineArr}
                    />
                </>
            )
        } else if (conferenceStatus && commonConferenceArr.length > 0) {
            const clientIndex = inComingLineArr.find(elem => elem.displayValue);
            const clientValue = [clientIndex.contactValueName, clientIndex.contactValueNumber]

            return <>
                <ConferenceItem
                    className="pl-4"
                    clientValue={clientValue}
                    inComingLineArr={inComingLineArr}
                >
                    <div className="remove-conference position-relative d-flex flex-nowrap">
                        <LeftArrow onClick={removeConference}/>
                        <span className="conference-title">Ожидание...</span>
                    </div>
                </ConferenceItem>

                < CommonContact
                    commonConferenceArr={commonConferenceArr}
                    keyboardStatus={keyboardStatus}
                    conferenceStatus={conferenceStatus}
                    enterValue={enterValue}
                    contactValueName={contactValueName}
                    contactValueNumber={contactValueNumber}
                    inComingLineArr={inComingLineArr}
                    updateContactValue={updateContactValue}
                    updateEnterValue={updateEnterValue}
                    deleteEnterValue={deleteEnterValue}

                />
            </>
        } else {
            return <CommonContact
                deleteEnterValue={deleteEnterValue}
                commonConferenceArr={commonConferenceArr}
                keyboardStatus={keyboardStatus}
                inComingCallArr={inComingCallArr}
                conferenceStatus={conferenceStatus}
                enterValue={enterValue}
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}
            />
        }
    };

    return (
        <div className="phone-screen-block d-flex flex-column">
            <DisplayHeader inComingLineArr={inComingLineArr}
                           inComingCallArr={inComingCallArr}/>
            {inComingCallArr.length > 0 ?
                <InComingCall
                    takeInComingCall={takeInComingCall}
                    inComingLineArr={inComingLineArr}
                    inComingCallArr={inComingCallArr}
                /> : null}
            <div className="common-input-group d-flex flex-column justify-content-between h-100">
                {renderIfComponent()}
            </div>
            {inComingLineArr.find(elem => elem.callStatus) ? <DisplayMicrophone/> : null}
        </div>
    );
};

export default ScreenGroup;
