import React from 'react';
import {Route, Switch} from "react-router-dom"

import "./index.scss"
import EnterNumberPage from "./commonSwitchGroup/EnterNumberPage";
import LastCall from "./commonSwitchGroup/lastСall";
import ContactPage from "./commonSwitchGroup/ContactsPage";
import SearchPage from "./commonSwitchGroup/SearhPages";


const PhoneContent = ({
                          setActiveElem,
                                              toggleStyleSoftPhone,
                          commonConferenceArr,
                          runCallTimer,
                          toggleConferenceStatus,
                          conferenceStatus,
                          toggleMicrophoneStatus,
                          toggleHoldLine,
                          endCallSession,
                          startCallSession,
                          keyboardStatus,
                          updateContactValue,
                          inComingLineArr,
                          updateEnterValue,
                          microphoneStatus,
                          enterValue,
                          contactValueName,
                          contactValueNumber,
                          changeCallLine,
                          toggleKeyboard,
                          addSearch
                      }) => {


    return (
        <div className="content-wrapper d-flex flex-column justify-content-around w-100 h-100">

            <Switch>
                <Route exact path="/softPhone" render={() =>
                    (
                        <EnterNumberPage
                            toggleStyleSoftPhone={toggleStyleSoftPhone}
                            commonConferenceArr={commonConferenceArr}
                            toggleKeyboard={toggleKeyboard}
                            runCallTimer={runCallTimer}
                            toggleConferenceStatus={toggleConferenceStatus}
                            toggleMicrophoneStatus={toggleMicrophoneStatus}
                            microphoneStatus={microphoneStatus}
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
                            setActiveElem={setActiveElem}
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
                            setActiveElem={setActiveElem}
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
                            setActiveElem={setActiveElem}
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
            </Switch>
        </div>
    )
}

export default PhoneContent;