import React from 'react';
import "./index.scss"
import DisplayHeader from "./DisplayHeader";
import CommonContact from "./CommonContactInfo";
import DisplayMicrophone from "./DisplayMicrophone";
import ConferenceItem from "./ConferensInfo/ConferenceCallItem";
import SubscriberValue from "./ActivCallDisplay/SubscriberValue";
import Combine from "../common/icon/arrow/Combine";
import ConferenceBlock from "./ConferensInfo/ConferenceDisplayBlock";


const ScreenGroup = ({updateContactValue,  setConference,commonConferenceArr, updateEnterValue, inComingLineArr, microphoneStatus, enterValue, contactValueName, contactValueNumber, conferenceStatus}) => {


    if (commonConferenceArr.length === 0 && inComingLineArr.find(e => e.conferenceActive)) {
              setConference ([ inComingLineArr.find(e => e.conferenceActive)])
            }


    const combineConference = () => {
          setConference([...commonConferenceArr,initiatorValue()]);
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
        if (commonConferenceArr.length > 1) {
            return (
                <ConferenceBlock
                    commonConferenceArr={commonConferenceArr}
                    inComingLineArr={inComingLineArr}
                    unCombineConference={unCombineConference}
                />
            )
        } else if (inComingLineArr.find(elem => elem.displayValue && elem.callStatus && !conferenceStatus)) {

            return (
                <>
                    {inComingLineArr.find(elem => elem.conferenceActive) ?
                        <ConferenceItem
                            clientValue={slaveClientValue()}
                            className="hold"
                            children={<Combine combineConference={combineConference}/>}
                        /> : null}
                    <SubscriberValue
                        inComingLineArr={inComingLineArr}
                    />
                </>
            )
        } else if (conferenceStatus === true) {
            const clientIndex = inComingLineArr.find(elem => elem.displayValue);
            const clientValue = [clientIndex.contactValueName, clientIndex.contactValueNumber]

            return <>

                <ConferenceItem

                    clientValue={clientValue}
                    inComingLineArr={inComingLineArr}
                    children={(<span className="conference-title">Ожидание . . .</span>)}
                />

                < CommonContact
                    conferenceStatus={conferenceStatus}
                    enterValue={enterValue}
                    contactValueName={contactValueName}
                    contactValueNumber={contactValueNumber}
                    inComingLineArr={inComingLineArr}
                    updateContactValue={updateContactValue}
                    updateEnterValue={updateEnterValue}
                />
            </>
        } else {
            return <CommonContact
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
            <DisplayHeader inComingLineArr={inComingLineArr}/>
            <div className="d-flex flex-column justify-content-between h-100">
                {renderIfComponent()}
            </div>
            {inComingLineArr.find(elem => elem.callStatus) ?
                <DisplayMicrophone
                    inComingLineArr={inComingLineArr}
                    microphoneStatus={microphoneStatus}
                /> :
                null}
        </div>
    );
};

export default ScreenGroup;
