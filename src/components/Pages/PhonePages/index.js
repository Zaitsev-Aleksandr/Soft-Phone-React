import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


import "./index.scss"
import NavGroup from "./NavGrop";
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
                        <Route exact path="/" render={() => <EnterNumberPage
                            reloadState={this.props.reloadState}
                            contactValueName={this.props.contactValueName}
                            contactValueNumber={this.props.contactValueNumber}
                            enterValue={this.props.enterValue}
                            updateEnterValue={this.props.updateEnterValue}
                            addSearch={this.props.addSearch}
                        />}
                        />
                        <Route exact path="/LastCall" render={() => <LastCall
                            reloadState={this.props.reloadState}
                            contactValueName={this.props.contactValueName}
                            contactValueNumber={this.props.contactValueNumber}
                            enterValue={this.props.enterValue}
                            updateEnterValue={this.props.updateEnterValue}
                            updateContactValue={this.props.updateContactValue}
                            addSearch={this.props.addSearch}

                        />}
                        />
                        <Route exact path="/ContactPage" render={() => <ContactPage
                            reloadState={this.props.reloadState}
                            contactValueName={this.props.contactValueName}
                            contactValueNumber={this.props.contactValueNumber}
                            enterValue={this.props.enterValue}
                            updateEnterValue={this.props.updateEnterValue}
                            updateContactValue={this.props.updateContactValue}
                            addSearch={this.props.addSearch}
                        />}
                        />
                        <Route exact path="/SearchPage" render={() => <SearchPage
                            reloadState={this.props.reloadState}
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