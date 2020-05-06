import React, {useEffect, useState} from 'react';
import "./index.scss"
import "./darkScheme.scss"
import DisplayHeader from "./DisplayHeader";
import CommonContact from "./CommonContactInfo";
import DisplayMicrophone from "./DisplayMicrophone";
import ConferenceItem from "../ActionCall/ConferensInfo/ConferenceCallItem";
import Combine from "../common/icon/arrow/Combine";
import ConferenceBlock from "../ActionCall/ConferensInfo/ConferenceDisplayBlock";
import InComingCall from "../ActionCall/InComingCall";
import ActiveCallDisplay from "./ActivCallDisplay";
import TransferItem from "../ActionCall/Transfer/TransferCallItem";
import Cancel from "../common/icon/WindowCloce";

const ScreenGroup = ({
    transferCall,
    absolutePath,
     toggleTransfer, 
     updateContactValue,
      deleteEnterValue,
       keyboardStatus,
       takeInComingCall, 
       inComingCallArr, 
       removeConference, 
       endCallSession,
        setConference, 
        commonConferenceArr, 
        updateEnterValue, 
        inComingLineArr,
         enterValue,
          contactValueName,
           contactValueNumber, 
           conferenceStatus
        }) => {

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
        } else if (inComingLineArr.find(elem => elem.displayValue && elem.callStatus && !conferenceStatus && !transferCall)) {
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
        } else if (transferCall) {
            const clientIndex = inComingLineArr.find(elem => elem.transferActive);
            const clientValue = [clientIndex.contactValueName, clientIndex.contactValueNumber]
            return <>
                <TransferItem
                    clientIndex={clientIndex}
                    className="pl-4"
                    clientValue={clientValue}
                    inComingLineArr={inComingLineArr}
                >
                    <div className="remove-conference position-relative d-flex flex-nowrap ">
                        {clientIndex.callStatus ? <Cancel onClick={toggleTransfer}/> : ""}
                        <span className="transfer-title">
                            {clientIndex.callStatus ? "Ожидание..." : "Трарсер"}</span>
                    </div>
                </TransferItem>
                < CommonContact
                absolutePath={absolutePath}
                    transferCall={transferCall}
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
        } else if (conferenceStatus && commonConferenceArr.length > 0 && !transferCall) {
            const clientIndex = inComingLineArr.find(elem => elem.displayValue);
            const clientValue = [clientIndex.contactValueName, clientIndex.contactValueNumber]

            return <>
                <ConferenceItem
                    className="pl-4"
                    clientValue={clientValue}
                    inComingLineArr={inComingLineArr}
                >
                    <div className="remove-conference position-relative d-flex flex-nowrap">
                        <Cancel onClick={removeConference}/>
                        <span className="conference-title">Ожидание...</span>
                    </div>
                </ConferenceItem>

                < CommonContact
                absolutePath={absolutePath}
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
            absolutePath={absolutePath}
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
            <DisplayHeader
            absolutePath={absolutePath}
                                inComingLineArr={inComingLineArr}
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
