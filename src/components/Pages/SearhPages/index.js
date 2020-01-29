import React, {Component} from 'react';
import InputSection from "./InputSection/InputSection";
import PhoneBookSection from "./PhoneBookSection/PhoneBookSection";

import "./index.scss"
import phoneBook from "./statics";


class SearchPage extends Component {
    state = {
        searchValue: null,
        lookingFor: false,
        searchArr: phoneBook
    };

    togglelookingFor = () => {
        this.setState({
                lookingFor: true
            }
        )
    };

    startSearch = (e) => {
        console.log(e.currentTarget.value);
        this.togglelookingFor();
        this.setState({
            searchValue: e.currentTarget.value,
            searchArr: phoneBook.filter(elem => elem.name ? elem.name.toLowerCase().replace(/\s+/g, "").includes(e.currentTarget.value.toLowerCase().replace(/\s+/g, ""))|| elem.number.replace(/\s+/g, "").includes(e.currentTarget.value.replace(/\s+/g, "")): "")

        });


    };


    render() {
        return (
            <div className="search-common-wrapper d-flex flex-column">
                <InputSection
                    startSearch={this.startSearch}
                    addSearch={this.props.addSearch}
                />
                <PhoneBookSection
                    searchArr={this.state.searchArr}
                    lookingFor={this.state.lookingFor}
                />
            </div>
        );
    }
}

export default SearchPage;