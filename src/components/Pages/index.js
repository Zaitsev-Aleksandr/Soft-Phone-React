import React, { useCallback } from 'react';

import { Switch, Route, useHistory } from 'react-router-dom'

import "./index.scss"
import "./darkScheme.scss"
import EnterNumberPage from "./EnterNumberPage";
import LastCall from "./lastСall";
import ContactPage from "./ContactsPage";
import SearchPage from "./SearhPages";
import CommonSettings from "./Settings";
import {AbsolutePatht} from "../../Context/Context";
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
const absolutePath=useCallback( window.location.pathname , [])

    useKeyboard([
        {
            keys: [[KEYBOARD.ALT, KEYBOARD.ONE]],
            handler: e => {
                history.push(`${absolutePath}/`);
                            }
        },
        {
            keys: [[KEYBOARD.ALT, KEYBOARD.TWO]],
            handler: e => {
                history.push(`${absolutePath}/LastCall`);
            }
        },
        {
            keys: [[KEYBOARD.ALT, KEYBOARD.THREE]],
            handler: e => {
                history.push(`${absolutePath}/ContactPage`)
            }
        },

    ]);
    return (
        <AbsolutePatht.Provider value={ absolutePath }>
        <div className="content-wrapper d-flex flex-column justify-content-around w-100 h-100">

            <Switch>
                <Route  exact path={`${absolutePath}/`} render={() =>
                    (
                        <EnterNumberPage
                        absolutePath={absolutePath}
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
                <Route exact path={`${absolutePath}/LastCall`} render={() =>
                    (
                        <LastCall
                        absolutePath={absolutePath}
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
                <Route exact path={`${absolutePath}/ContactPage`} render={() =>
                    (
                        <ContactPage
                        absolutePath={absolutePath}
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
                <Route exact path={`${absolutePath}/SearchPage`} render={() =>
                    (<SearchPage
                        absolutePath={absolutePath}
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
                    path={`${absolutePath}/Settings`}
                    render={() => <CommonSettings
                        changeColorScheme={changeColorScheme}
                        changeSipStatus={changeSipStatus}/>}
                />
            </Switch>
        </div>
        </AbsolutePatht.Provider>
    )
};
export default PhoneContent