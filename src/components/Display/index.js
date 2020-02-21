import React from 'react';
import "./index.scss"
import DisplayHeader from "./DisplayHeader";
import CommonContact from "./CommonContactInfo";
import DisplayFooter from "./DisplayFooter";
import ConferenceItem from "./ConferensInfo/ConferenceCallItem";
import SubscriberValue from "./ActivCallDisplay/SubscriberValue";
import Combine from "../common/icon/arrow/Combine";


const ScreenGroup = ({updateContactValue, addConferencePerson, updateEnterValue, inComingLineArr, microphoneStatus, enterValue, contactValueName, commonConferenceArr, contactValueNumber, conferenceStatus}) => {


    const slaveClientValue = () => {
        const element = inComingLineArr.find(elem => elem.conferenceActive && !elem.displayValue);
        return element.contactValueName ? element.contactValueName : element.contactValueNumber;
    };

    const valueName = () => {
        if (inComingLineArr.find(element => element.displayValue)) {
            if (inComingLineArr.find(element => element.displayValue).contactValueName) {
                return inComingLineArr.find(element => element.displayValue).contactValueName
            } else return inComingLineArr.find(element => element.displayValue).contactValueNumber;
        }
    };
    const timeValue = () => {
        if (inComingLineArr.find(element => element.displayValue)) return inComingLineArr.find(element => element.displayValue).timeValue;
        return null;
    };

    const conferenceProps = {
        status: true,
        name: valueName(),
        timeValue: timeValue(),
        connected: false
    };


    const renderIfComponent = () => {
        if (inComingLineArr.find(elem => elem.displayValue && elem.callStatus === true && conferenceStatus === false)) {

            return (
                <>
                    {inComingLineArr.find(elem => elem.conferenceActive) ?
                        <ConferenceItem
                            clientValue={slaveClientValue()}
                            className="hold"
                            children={(
                                <Combine
                                    onClick={() => addConferencePerson({...conferenceProps})}
                                />
                            )}
                        /> : null}
                    <SubscriberValue
                        inComingLineArr={inComingLineArr}
                    />
                </>
            )
        } else if (conferenceStatus === true) {
            const clientIndex = inComingLineArr.find(elem => elem.displayValue);
            console.log(clientIndex.contactValueName);
            const clientValue = clientIndex.contactValueName ? clientIndex.contactValueName : clientIndex.contactValueNumber;
            return <>

                <ConferenceItem
                    clientValue={clientValue}
                    inComingLineArr={inComingLineArr}
                />

                < CommonContact
                    enterValue={enterValue}
                    contactValueName={contactValueName}
                    contactValueNumber={contactValueNumber}
                    inComingLineArr={inComingLineArr}
                    updateContactValue={updateContactValue}
                    updateEnterValue={updateEnterValue}
                />
            </>
        }/* else if (inComingLineArr.find(elem => elem.conferenceActive)) {
            const initiatorClient = inComingLineArr.find(elem => elem.conferenceActive);
            const initiatorClientValue = initiatorClient.contactValueName ? initiatorClient.contactValueName : initiatorClient.contactValueNumber;
            const slaveClient = inComingLineArr.find(elem => elem.displayValue);


            return (
                <ConferenceDisplay
                    inComingLineArr={inComingLineArr}
                >
                    <ConferenceItem clientValue={initiatorClientValue}/>
                    <ConferenceItem clientValue={slaveClientValue} className="hold" children={<Combine/>}/>

                </ConferenceDisplay>)
        } */ else {
            return <CommonContact
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
                inComingLineArr={inComingLineArr}/>


            {renderIfComponent()}

            {inComingLineArr.find(elem => elem.callStatus) ?
                <DisplayFooter
                    inComingLineArr={inComingLineArr}
                    microphoneStatus={microphoneStatus}
                /> :
                null}
        </div>
    );
};

export default ScreenGroup;
