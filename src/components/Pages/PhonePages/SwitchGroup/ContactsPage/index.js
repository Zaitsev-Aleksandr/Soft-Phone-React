import React, {Component} from 'react';
import InputSection from "./../lastСall/InputSection/InputSection";
import PhoneBookSection from "./PhoneBookSection";

import contactBook from "./statics";


class LastCall extends Component {
    state = {
        searchValue: "",
        lookingFor: false,
        searchArr: contactBook.sort(function (a, b) {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0
        })
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
        searchArr: contactBook.filter(elem => elem.name ? elem.name.toLowerCase().replace(/\s+/g, "").includes(e.currentTarget.value.toLowerCase().replace(/\s+/g, "")) || elem.number.replace(/\s+/g, "").includes(e.currentTarget.value.replace(/\s+/g, "")) : "")
    });
};

clearSearchInput = () => {
    this.setState({
        searchValue: "",
        searchArr: contactBook
    })

};

render()
{
    return (
        <div className="last-contact-wrapper d-flex flex-column">
            <InputSection
                value={this.state.searchValue}
                addSearch={this.props.addSearch}
                startSearch={this.startSearch}
                clearSearchInput={this.clearSearchInput}
            />
            <PhoneBookSection
                updateContactValue={this.props.updateContactValue}
                searchArr={this.state.searchArr}
                lookingFor={this.state.lookingFor}
            />
        </div>
    );
}
}

export default LastCall;