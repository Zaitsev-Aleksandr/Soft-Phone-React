import React from 'react';

import { Switch, Route, useHistory } from 'react-router-dom'

import "./index.scss"
import "./darkScheme.scss"
import EnterNumberPage from "./EnterNumberPage";
import LastCall from "./lastСall";
import ContactPage from "./ContactsPage";
import SearchPage from "./SearhPages";
import CommonSettings from "./Settings";
import useKeyboard, {KEYBOARD} from "@alexkush/react-use-keyboard";


const PhoneContent = ({
                          changeColorScheme,
                          transferCall,
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
    let history = useHistory();

    useKeyboard([
        {
            keys: [[KEYBOARD.ALT, KEYBOARD.ONE]],
            handler: e => {
                history.push("/pages/common/call/calls.html/SoftPhone");
                            }
        },
        {
            keys: [[KEYBOARD.ALT, KEYBOARD.TWO]],
            handler: e => {
                history.push("/pages/common/call/calls.html/LastCall");
            }
        },
        {
            keys: [[KEYBOARD.ALT, KEYBOARD.THREE]],
            handler: e => {
                history.push("/pages/common/call/calls.html/ContactPage")
            }
        },

    ]);
    return (
        <div className="content-wrapper d-flex flex-column justify-content-around w-100 h-100">

            <Switch>
                <Route  path="/pages/common/call/calls.html/SoftPhone" render={() =>
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
                <Route exact path="/pages/common/call/calls.html/LastCall" render={() =>
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
                <Route exact path="/pages/common/call/calls.html/ContactPage" render={() =>
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
                <Route exact path="/pages/common/call/calls.html/SearchPage" render={() =>
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
                    path="/pages/common/call/calls.html/Settings"
                    render={() => <CommonSettings
                        changeColorScheme={changeColorScheme}
                        changeSipStatus={changeSipStatus}/>}
                />
            </Switch>
        </div>
    )
};
export default PhoneContent