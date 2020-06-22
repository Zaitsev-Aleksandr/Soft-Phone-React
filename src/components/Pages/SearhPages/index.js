import React, {Component} from 'react';
import PhoneBookSection from "./PhoneBookSection/PhoneBookSection";
import InputSection from "../InputSection/InputSection";
import "./index.scss"
import "./darkScheme.scss"
import phoneBook from "../../Main/commonStatic";
import searchFunction from "../../../directionFunctional/searchFunction";
import InComingCall from "../../ActionCall/InComingCall"


class SearchPage extends Component {
    state = {
        searchValue: "",
        lookingFor: false,
        searchArr: phoneBook
    };

    toggleLookingFor = () => {
        this.setState({
                lookingFor: true
            }
        )
    };

    startSearch = (e) => {
        this.toggleLookingFor();
        this.setState({
            searchValue: e.currentTarget.value,
            searchArr: searchFunction(phoneBook, /\s+/g , this.state.searchValue) })
    };

    clearSearchInput = () => {
        this.setState({
            searchValue: "",
            searchArr: phoneBook
        })

    };

    render() {
        return (
            <div className="search-common-wrapper d-flex flex-column">
                <InputSection
                 absolutePath={this.props.absolutePath}
                    setActiveElem={this.props.setActiveElem}
                    value={this.state.searchValue}
                    addSearch={this.props.addSearch}
                    startSearch={this.startSearch}
                    clearSearchInput={this.clearSearchInput}
                />
                
              {this.props.inComingCallArr.length > 0 ?
                <InComingCall
                    takeInComingCall={this.props.takeInComingCall}
                    inComingLineArr={this.props.inComingLineArr}
                    inComingCallArr={this.props.inComingCallArr}
                /> : null}
                <PhoneBookSection
                 absolutePath={this.props.absolutePath}
                    setActiveElem={this.props.setActiveElem}
                    updateContactValue={this.props.updateContactValue}
                    searchArr={this.state.searchArr}
                    lookingFor={this.state.lookingFor}
                />
            </div>
        );
    }
}

export default SearchPage;