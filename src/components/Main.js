import React, {Component} from 'react';
import Header from "./Header";
import "./Main.scss"
import PhoneContent from "./Pages";


class Main extends Component {

    static LINE_QUANTITY = 4;

    static createLineObj = () => {
        let arr = [];
        for (let i = 0; i < Main.LINE_QUANTITY; i++) {
            arr.push({
                line: i + 1,
                displayValue: false,
                contactValueName: "",
                contactValueNumber: "",
                callStatus: false,
                holdLine: false,
            })
        }
        return arr
    };

    /*______________________this State____________________________________*/

    state = {
        keyboardStatus: true,
        transferCall: false,
        microphoneStatus: true,
        searchActive: false,
        enterValue: "",
        contactValueName: "",
        contactValueNumber: "",
        conferenceStatus: false,
        inComingLineArr: Main.createLineObj()
    };

    /*_________________________________________________________________________*/


    cloneStateArr = () => {
        return JSON.parse(JSON.stringify(this.state.inComingLineArr));
    };

    endCallSession = () => {
        const cloneArr = this.cloneStateArr();
        const index = cloneArr.findIndex(elem => elem.callStatus === true && elem.displayValue === true);
        cloneArr[index] = {
            line: index + 1,
            displayValue: false,
            personName: "",
            personNumber: "",
            callStatus: false,
            holdLine: false,
        };
        this.setState({
            microphoneStatus: true,
            inComingLineArr: cloneArr
        });
    };


    startCallSession = () => {
        const cloneArr = this.cloneStateArr();
        const index = cloneArr.findIndex(elem => elem.callStatus === false);
        if (index >= 0) {
            cloneArr[index].callStatus = true;
            cloneArr[index].personName = this.state.contactValueName;
            cloneArr[index].personNumber = this.state.contactValueNumber;
            cloneArr[index].displayValue = true;
            this.setState({
                inComingLineArr: cloneArr
            });
        }
        console.log(this.state);
    };
    toggleHoldLine = () => {
        const cloneArr = this.cloneStateArr();
        const index = cloneArr.findIndex(elem => elem.callStatus === true && elem.displayValue === true,);
        if (index >= 0) {
            cloneArr[index].holdLine = !cloneArr[index].holdLine;
            this.setState({
                inComingLineArr: cloneArr
            });
        }
        console.log(this.state.inComingLineArr);
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

    };

    reloadCallState = () => {
        this.setState({
            keyboardStatus: true,
            holdLine: false,
            transferCall: false,
            microphoneStatus: true,
        })
    };

    toggleMicrophoneStatus = () => {
        this.setState({
            microphoneStatus: !this.state.microphoneStatus
        });
        console.log(this.state);
    };

    toggleKeyboard = () => {
        this.setState({
            keyboardStatus: !this.state.keyboardStatus
        });
    };

    toggleTransfer = () => {
        this.setState({
            transferCall: !this.state.transferCall
        })
    };
 componentDidMount() {

 }


    render() {
        return (
            <div className="main d-flex flex-column">
                <Header/>

                <PhoneContent
                    toggleMicrophoneStatus={this.toggleMicrophoneStatus}
                    toggleHoldLine={this.toggleHoldLine}
                    endCallSession={this.endCallSession}
                    startCallSession={this.startCallSession}
                    keyboardStatus={this.state.keyboardStatus}
                    updateContactValue={this.updateContactValue}
                    inComingLineArr={this.state.inComingLineArr}
                    updateEnterValue={this.updateEnterValue}
                    microphoneStatus={this.state.microphoneStatus}
                    enterValue={this.state.enterValue}
                    contactValueName={this.state.contactValueName}
                    contactValueNumber={this.state.contactValueNumber}
                />
            </div>
        );
    }
}


export default Main;