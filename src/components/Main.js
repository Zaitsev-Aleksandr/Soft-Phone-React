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
        activeCall: false,
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

    searchFreeLine = (arr) => {
        return arr.findIndex(elem => elem.callStatus === false)
    };
    cloneStateArr = () => {
        return JSON.parse(JSON.stringify(this.state.inComingLineArr));
    };

    endCallSession = (line) => {
        const cloneArr = this.cloneStateArr();
        cloneArr[line - 1] = {
            line: line,
            displayValue: false,
            personName: "",
            personNumber: "",
            callStatus: false,
            holdLine: false,
        };
        this.setState({
            inComingLineArr: cloneArr
        });
    };


    startCallSession = () => {
        const cloneArr = this.cloneStateArr();
        const index = this.searchFreeLine(cloneArr);
        if (index >= 0) {
            cloneArr[index].callStatus = true;
            cloneArr[index].personName = this.state.contactValueName;
            cloneArr[index].contactValueNumber = this.state.contactValueNumber;
            cloneArr[index].displayValue = true;
            this.setState({
                inComingLineArr: cloneArr
            })
        }


        this.searchFreeLine(cloneArr);
        this.setState({})


        /*___________________________________________________________________*/


        /*_________________________________________________________________*/
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
        console.log(this.state.enterValue);
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
            activeCall: false,
            keyboardStatus: true,
            holdLine: false,
            transferCall: false,
            microphoneStatus: true,
        })
    };

    toggleMicrophoneStatus = () => {
        this.setState({
            microphoneStatus: !this.state.microphoneStatus
        })
    };

    toggleActiveCall = () => {
        this.setState({
                activeCall: !this.state.activeCall
            }
        )
    };

    toggleKeyboard = () => {
        this.setState({
            keyboardStatus: !this.state.keyboardStatus
        });
    };
    toggleHoldLine = () => {
        this.setState({
                holdLine: !this.state.holdLine
            }
        );
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
                    startCallSession={this.startCallSession}
                    keyboardStatus={this.state.keyboardStatus}
                    updateContactValue={this.updateContactValue}
                    enterValue={this.state.enterValue}
                    inComingLineArr={this.state.inComingLineArr}
                    updateEnterValue={this.updateEnterValue}
                    toggleActiveCall={this.toggleActiveCall}
                    activeCall={this.state.activeCall}
                />
            </div>
        );
    }
}


export default Main;