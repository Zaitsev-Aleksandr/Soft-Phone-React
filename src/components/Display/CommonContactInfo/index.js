import React, {Component} from 'react';
import Input from "../../common/inputs/Input";

import "./index.scss"
import AddContact from "./commonInfoInput/AddContactButton";
import PhoneBookSection from "../../Pages/EnterNumberPage/SearchBlock/PhoneBookSection";
import phoneBook from "./../../commonStatic";


class CommonContact extends Component {

    state = {
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
    startSearch = () => {
        this.toggleLookingFor();
        this.setState({
            searchArr: phoneBook.filter(elem => elem.name ? elem.name.toLowerCase().replace(/\s+/g, "").includes(this.props.enterValue.toLowerCase().replace(/\s+/g, "")) || elem.number.replace(/\s+/g, "").includes(this.props.enterValue.replace(/\s+/g, "")) : "")
        });
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.enterValue!==this.props.enterValue ) {
          if  (!this.props.contactValueNumber) {
                   this.startSearch()
          } else {this.setState({lookingFor: false})}
        }
    }

    componentDidMount() {
        if (document.querySelector(".initial-input")) {
            document.querySelector(".initial-input").onblur = function () {
                document.querySelector(".initial-input").focus();
            }
        }
    }

    componentWillUnmount() {
        document.querySelector(".initial-input").onblur=null
    }


    render() {

        const nameElemValue = this.props.contactValueName ?
            <span className="enter-phone-name text-center ">{this.props.contactValueName}</span> : null
        const phoneElemValue = () => {

            return <Input
                disabled={!!this.props.inComingLineArr.find(elem => elem.callStatus) && !this.props.conferenceStatus }
                className="enter-phone-number initial-input text-center test"
                onChange={(e) => {
                    this.startSearch();
                    this.props.updateEnterValue(e)
                }}
                placeholder="Введите контактные данные"
                value={!this.props.contactValueNumber ? this.props.enterValue : this.props.contactValueNumber}
            />
        }

        const getDisplayValue = () => {
            console.log();
            if (!this.props.contactValueName && this.props.keyboardStatus.open && this.props.enterValue && !this.props.callStatus && this.state.searchArr.length === 0) {
                return <AddContact/>
            } else return nameElemValue
        };

        const
            showLogoCondition = (!this.props.transferCall && !this.props.commonConferenceArr.length && !this.props.contactValueName && !this.props.contactValueNumber && !this.props.conferenceStatus && !this.props.enterValue && !this.props.inComingCallArr.length )
        return (
            <div
                className={`contact-input-output-group d-flex flex-column  align-items-center justify-content-end ${showLogoCondition ? "start" : ""}`}>
                {!this.props.callStatus && this.state.lookingFor && this.props.enterValue && this.state.searchArr.length>0 ?
                    <PhoneBookSection
                        className="p-0"
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
        )
    }
}

export default CommonContact;













