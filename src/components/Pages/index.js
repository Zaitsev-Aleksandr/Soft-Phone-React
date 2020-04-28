import React from 'react';
import {Route, Switch} from "react-router-dom"

import "./index.scss"
import EnterNumberPage from "./EnterNumberPage";
import LastCall from "./lastСall";
import ContactPage from "./ContactsPage";
import SearchPage from "./SearhPages";
import CommonSettings from "./Settings";


const PhoneContent = ({transferCall,
                          toggleTransfer,
                          deleteEnterValue,
                          inComingCallArr,
                          removeConference,
                          changeSipStatus,
                          setConference,
                          toggleStyleSoftPhone,
                          commonConferenceArr,
                          runCallTimer,
                          toggleConferenceStatus,
                          conferenceStatus,
                          toggleHoldLine,
                          endCallSession,
                          startCallSession,
                          keyboardStatus,
                          updateContactValue,
                          inComingLineArr,
                          updateEnterValue,
                          enterValue,
                          contactValueName,
                          contactValueNumber,
                          changeCallLine,
                          toggleKeyboard,
                          addSearch,
                          takeInComingCall
                      }) => {
    return (
        <div className="content-wrapper d-flex flex-column justify-content-around w-100 h-100">

            <Switch>
                <Route exact path="/softPhone" render={() =>
                    (
                        <EnterNumberPage
                            transferCall={transferCall}
                            toggleTransfer={toggleTransfer}
                            deleteEnterValue={deleteEnterValue}
                            takeInComingCall={takeInComingCall}
                            inComingCallArr={inComingCallArr}
                            removeConference={removeConference}
                            setConference={setConference}
                            toggleStyleSoftPhone={toggleStyleSoftPhone}
                            commonConferenceArr={commonConferenceArr}
                            toggleKeyboard={toggleKeyboard}
                            runCallTimer={runCallTimer}
                            toggleConferenceStatus={toggleConferenceStatus}
                            toggleHoldLine={toggleHoldLine}
                            endCallSession={endCallSession}
                            startCallSession={startCallSession}
                            updateEnterValue={updateEnterValue}
                            updateContactValue={updateContactValue}
                            conferenceStatus={conferenceStatus}
                            inComingLineArr={inComingLineArr}
                            keyboardStatus={keyboardStatus}
                            enterValue={enterValue}
                            contactValueName={contactValueName}
                            contactValueNumber={contactValueNumber}
                            changeCallLine={changeCallLine}
                        />
                    )
                }
                />
                <Route exact path="/LastCall" render={() =>
                    (
                        <LastCall
                            contactValueName={contactValueName}
                            contactValueNumber={contactValueNumber}
                            enterValue={enterValue}
                            updateEnterValue={updateEnterValue}
                            updateContactValue={updateContactValue}
                            addSearch={addSearch}

                        />
                    )
                }
                />
                <Route exact path="/ContactPage" render={() =>
                    (
                        <ContactPage
                            contactValueName={contactValueName}
                            contactValueNumber={contactValueNumber}
                            enterValue={enterValue}
                            updateEnterValue={updateEnterValue}
                            updateContactValue={updateContactValue}
                            addSearch={addSearch}
                        />
                    )
                }
                />
                <Route exact path="/SearchPage" render={() =>
                    (<SearchPage
                            contactValueName={contactValueName}
                            contactValueNumber={contactValueNumber}
                            enterValue={enterValue}
                            updateEnterValue={updateEnterValue}
                            updateContactValue={updateContactValue}
                            addSearch={addSearch}
                        />
                    )
                }
                />
                <Route
                    exact
                    path="/Settings"
                    render={() => <CommonSettings changeSipStatus={changeSipStatus}/>}
                />
            </Switch>
        </div>
    )
};

export default PhoneContent;