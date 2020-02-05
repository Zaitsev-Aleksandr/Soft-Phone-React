import React, {Component} from 'react';
import Header from "./Header";
import "./Main.scss"
import PhoneContent from "./Pages/PhonePagesComponents";

class Main extends Component {
    state = {
        searchActive: false,
        contactValueName: "",
        contactValueNumber: "",
        enterValue: ""
    };

    reloadState = () => {
        this.setState({
            searchActive: false,
            contactValueName: "",
            contactValueNumber: "",
            enterValue: ""
        })
    };

    addSearch = () => {
        this.setState({
            searchActive: !this.state.searchActive
        })
    };

    updateEnterValue = (e) => {
        if (e.currentTarget.tagName.toLowerCase() === "input") {
            this.setState({enterValue: e.currentTarget.value})
        } else if (e.currentTarget.classList.contains("backspace-button")) {
            this.setState({enterValue: this.state.enterValue.slice(0, -1)})
        } else {
            this.setState({enterValue: this.state.enterValue + e.currentTarget.innerText.slice(0, 1)})
        }
    };

    updateContactValue = (e) => {
        this.setState({
            contactValueName: e.currentTarget.querySelector(".phone-book-item-name").innerHTML,
            contactValueNumber: e.currentTarget.querySelector(".phone-book-item-number").innerHTML,
            enterValue: e.currentTarget.querySelector(".phone-book-item-number").innerHTML
                 });
        this.addSearch();
        console.log(this.state.contactValueName);
    };

    render() {
        return (
            <div className="main d-flex flex-column">
                <Header/>

                   <PhoneContent
                       reloadState={this.reloadState}
                       contactValueName={this.state.contactValueName}
                       contactValueNumber={this.state.contactValueNumber}
                       enterValue={this.state.enterValue}
                       updateEnterValue={this.updateEnterValue}
                       addSearch={this.addSearch}
                       updateContactValue={this.updateContactValue}

                    />
            </div>
        );
    }
}

export default Main;

