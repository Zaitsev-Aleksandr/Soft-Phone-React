import React, {Component} from 'react';
import Input from "../../common/inputs/Input";

import "./index.scss"
import AddContact from "./commonInfoInput/AddContactButton";
import PhoneBookSection from "../../Pages/commonSwitchGroup/EnterNumberPage/SearchBlock/PhoneBookSection";
import phoneBook from "./../../commonStatic";


class CommonContact extends Component {
    state = {
        searchValue: "",
        lookingFor: false,
        searchArr: phoneBook.sort(function (a, b) {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0
        })
    };
    reloadState = () => {
        this.setState({
            searchValue: "",
            lookingFor: false,
            searchArr: phoneBook.sort(function (a, b) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0
            })

        })
    };

    toggleLookingFor = () => {
        this.setState({
            lookingFor: true
        })
    };
    startSearch = (e) => {
        this.toggleLookingFor();
        this.setState({
            searchValue: e.currentTarget.value,
            searchArr: phoneBook.filter(elem => elem.name ? elem.name.toLowerCase().replace(/\s+/g, "").includes(e.currentTarget.value.toLowerCase().replace(/\s+/g, "")) || elem.number.replace(/\s+/g, "").includes(e.currentTarget.value.replace(/\s+/g, "")) : "")
        });
    };

    render() {

        const nameElemValue = !this.props.contactValueName ? null : (
            <Input
                disabled={this.props.inComingLineArr.find(elem => elem.callStatus) ? true : false}
                className="enter-phone-name text-center"
                onChange={this.props.updateEnterValue}
                value={this.props.contactValueName}
            />
        );

        const phoneElemValue = () => {
            if (this.props.keyboardStatus.open) {
                return <Input
                    disabled={this.props.inComingLineArr.find(elem => elem.callStatus) && !this.props.conferenceStatus ? true : false}
                    className="enter-phone-number text-center"
                    onChange={(e) => {
                        this.startSearch(e);
                        this.props.updateEnterValue(e)
                    }}
                    placeholder="Введите контактные данные"
                    autofocus="autoFocus"
                    value={!this.props.contactValueNumber ? this.props.enterValue : this.props.contactValueNumber}/>
            }
        }
        const getDisplayValue = () => {
            if (!this.props.contactValueName && this.props.enterValue && !this.props.callStatus && this.state.searchArr.length === 0) {
                return <AddContact/>
            } else {
                if (this.props.keyboardStatus.open) {
                    return nameElemValue
                } else {
                    return (<Input
                        disabled={this.props.inComingLineArr.find(elem => elem.callStatus) ? true : false}
                        className="enter-phone-number text-center"
                        onChange={this.props.updateEnterValue}
                        value={!this.props.contactValueName ? this.props.contactValueNumber : this.props.contactValueName }
                    />)
                }
            }
        };

        return (
            <div
                className={`contact-input-output-group d-flex flex-column  align-items-center justify-content-end ${this.props.enterValue || this.props.conferenceStatus || this.props.inComingCallArr.length > 0 ? "" : "start"}`}>
                {!this.props.callStatus && this.state.lookingFor && this.state.searchValue ?
                    <PhoneBookSection
                        keyboardStatus={this.props.keyboardStatus}
                        reloadState={this.reloadState}
                        toggleLookingFor={this.toggleLookingFor}
                        searchArr={this.state.searchArr}
                        updateContactValue={this.props.updateContactValue}
                    /> :
                    null}
                {getDisplayValue()}
                {phoneElemValue()}
            </div>
        );
    }
}

export default CommonContact;













