import React, {useState} from 'react';
import "./index.scss"
import DisplayHeader from "./DisplayHeader";
import CommonContact from "./CommonContactInfo";
import DisplayFooter from "./DisplayFooter";
import ConferenceItem from "./ConferensInfo/ConferenceCallItem";
import SubscriberValue from "./ActivCallDisplay/SubscriberValue";
import Combine from "../common/icon/arrow/Combine";
import ConferenceBlock from "./ConferensInfo/ConferenceDisplayBlock";


const ScreenGroup = ({updateContactValue, updateEnterValue, inComingLineArr, microphoneStatus, enterValue, contactValueName,  contactValueNumber, conferenceStatus}) => {

    const [conference, setConference] = useState([]);

    if(conference.length>0 && !inComingLineArr.find(e=>e.conferenceActive)){setConference([])}

    const initiatorValue=()=> inComingLineArr.find(e=>e.displayValue && !e.conferenceActive )? inComingLineArr.find(e=>e.displayValue && e.callStatus): inComingLineArr.find(e=>!e.displayValue && e.callStatus);

    console.log(conference);
    const slaveClientValue = () => {
        const element = inComingLineArr.find(elem => !elem.displayValue);
        return element.contactValueName ? element.contactValueName : element.contactValueNumber;
    };

    const renderConferenceComponent = () => {
        setConference([...conference, inComingLineArr.find(e=>e.conferenceActive), initiatorValue()]);
          };

    const renderIfComponent = () => {
        if (conference.length) {
            return (
                <ConferenceBlock conference={conference} inComingLineArr={inComingLineArr} />
            )
        }
        else if (inComingLineArr.find(elem => elem.displayValue && elem.callStatus === true && conferenceStatus === false)) {

            return (
                <>
                    {inComingLineArr.find(elem => elem.conferenceActive) ?
                        <ConferenceItem
                            clientValue={slaveClientValue()}
                            className="hold"
                            children={(
                                <Combine
                                    renderConferenceComponent ={renderConferenceComponent }
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
        } else {
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
            <div className="d-flex flex-column justify-content-between h-100">

                {renderIfComponent()}
            </div>
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
