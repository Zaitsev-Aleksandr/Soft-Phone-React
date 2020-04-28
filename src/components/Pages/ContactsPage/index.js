import React, {Component} from 'react';
import InputSection from "../InputSection/InputSection";
import PhoneBookSection from "./PhoneBookSection";

import phoneBook from "../../commonStatic";
import searchFunction from "../../../directionFunctional/searchFunction";

class LastCall extends Component {
    state = {
        navActiveElem: 0,
        searchValue: "",
        searchArr: phoneBook.sort(function (a, b) {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0
        })
    };

    changeNavActiveElem = (i) => {
           this.setState({
                navActiveElem: i
            }
        )
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
            searchArr:searchFunction(phoneBook, /\s+/g , this.state.searchValue)
        });
    };

    clearSearchInput = () => {
        this.setState({
            searchValue: "",
            searchArr: phoneBook
        })

    };

    render() {
        return (
            <div className="last-contact-wrapper d-flex flex-column">
                <InputSection
                    value={this.state.searchValue}
                    addSearch={this.props.addSearch}
                    startSearch={this.startSearch}
                    clearSearchInput={this.clearSearchInput}
                />
                <PhoneBookSection
                    searchValue={this.state.searchValue}
                    navActiveElem={this.state.navActiveElem}
                    changeNavActiveElem={this.changeNavActiveElem}
                    updateContactValue={this.props.updateContactValue}
                    searchArr={this.state.searchArr}
                    lookingFor={this.state.lookingFor}
                />
            </div>
        );
    }
}

export default LastCall;
