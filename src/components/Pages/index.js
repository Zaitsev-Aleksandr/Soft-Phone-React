import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


import "./index.scss"
import NavGroup from "./PhonePagesComponents/NavGrop";
import EnterNumberPage from "./SwitchGroup/EnterNumberPage";
import LastCall from "./SwitchGroup/lastСall";
import ContactPage from "./SwitchGroup/ContactsPage";
import SearchPage from "./SwitchGroup/SearhPages";


class PhoneContent extends Component {

    render() {
        return (
            <div className="content-wrapper d-flex flex-column justify-content-around w-100 h-100">
                <Router>
                    <Switch>
                        <Route exact path="/softPhone" render={() => <EnterNumberPage
                            callStatus={this.props.callStatus}
                            keyboardStatus={this.props.keyboardStatus}
                            transferCall={this.props.transferCall}
                            microphoneStatus={this.props.microphoneStatus}
                            searchActive={this.props.searchActive}
                            enterValue={this.props.enterValue}
                            personName={this.props.personName}
                            personNumber={this.props.personNumber}
                            conferenceStatus={this.props.conferenceStatus}
                            inComingLineArr={this.props.inComingLineArr}
                            endCallSomeLine={this.props.endCallSomeLine}

                        />}
                        />
                        <Route exact path="/LastCall" render={() => <LastCall
                            contactValueName={this.props.contactValueName}
                            contactValueNumber={this.props.contactValueNumber}
                            enterValue={this.props.enterValue}
                            updateEnterValue={this.props.updateEnterValue}
                            updateContactValue={this.props.updateContactValue}
                            addSearch={this.props.addSearch}

                        />}
                        />
                        <Route exact path="/ContactPage" render={() => <ContactPage
                            contactValueName={this.props.contactValueName}
                            contactValueNumber={this.props.contactValueNumber}
                            enterValue={this.props.enterValue}
                            updateEnterValue={this.props.updateEnterValue}
                            updateContactValue={this.props.updateContactValue}
                            addSearch={this.props.addSearch}
                        />}
                        />
                        <Route exact path="/SearchPage" render={() => <SearchPage
                            contactValueName={this.props.contactValueName}
                            contactValueNumber={this.props.contactValueNumber}
                            enterValue={this.props.enterValue}
                            updateEnterValue={this.props.updateEnterValue}
                            updateContactValue={this.props.updateContactValue}
                            addSearch={this.props.addSearch}
                        />}
                        />
                    </Switch>
                    <NavGroup/>
                </Router>
            </div>
        );
    }
}

export default PhoneContent;