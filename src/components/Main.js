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
                conferenceActive:false,
                startCallTime: "",
                timeValue: {
                    seconds: "00",
                    minutes: "00"
                }
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
        const activID = cloneArr.findIndex(elem => elem.callStatus === true && elem.displayValue === false);
        cloneArr[index] = {
            displayValue: false,
            contactValueName: "",
            contactValueNumber: "",
            callStatus: false,
            conferenceActive:false,
            holdLine: false,
            startCallTime: "",
            timeValue: {
                seconds: "00",
                minutes: "00"
            }
        };
        if (activID >= 0) {
            cloneArr[activID].displayValue = true;
            cloneArr[activID].holdLine = false;
        }

        this.setState({
            microphoneStatus: true,
            enterValue: "",
            contactValueName: "",
            contactValueNumber: "",
            inComingLineArr: cloneArr
        });
    };

    runCallTimer = () => {
        const subTotalTime = Date.now() - this.state.startCallTime;
        const subTotalSecond = Math.floor(((subTotalTime / 1000) % 60));
        const subTotalMinutes = Math.floor((subTotalTime / 60000));
        const second = subTotalSecond.toString().length < 2 ? "0" + subTotalSecond : subTotalSecond;
        const minute = subTotalMinutes.toString().length < 2 ? "0" + subTotalMinutes : subTotalMinutes;

        const cloneArr = this.cloneStateArr().map(elem => {
            if (elem.startCallTime) {
                return elem.timeValue = {
                    seconds: second,
                    minutes: minute
                }
            } else return elem
        });

        this.setState({
            inComingLineArr: cloneArr
        })
    };


    startCallSession = () => {
        const cloneArr = this.cloneStateArr();
        const index = cloneArr.findIndex(elem => elem.callStatus === false);
        const enterPhoneNumber = !this.state.contactValueNumber ? this.state.enterValue : this.state.contactValueNumber;
        cloneArr.forEach((elem, i) => {
            if (index >= 0 && index === i) {
                elem.callStatus = true;
                elem.personName = this.state.contactValueName;
                elem.personNumber = enterPhoneNumber;
                elem.displayValue = true;
                elem.startCallTime = Date.now();
            } else if (elem.callStatus === true && index !== i) {
                elem.holdLine = true;
                elem.displayValue = false;
            }

        });
        this.setState({
            inComingLineArr: cloneArr,
            conferenceStatus: false
        });
        this.reloadCallState();
            };




    changeCallLine = index => {
        const cloneArr = this.cloneStateArr();
        cloneArr.map(elem => {
            if (elem.displayValue) {
                elem.displayValue = false;
                elem.holdLine = true
            }
            return elem;
        });
        if (cloneArr[index].callStatus) {
            cloneArr[index].holdLine = false;
            cloneArr[index].displayValue = true;
        }
        this.setState({
            inComingLineArr: cloneArr
        })
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
        });
        this.addSearch();

    };

    reloadCallState = () => {
        this.setState({
            keyboardStatus: true,
            microphoneStatus: true,
            enterValue: "",
            contactValueName: "",
            contactValueNumber: "",
        })
    };
    conferenceStart =()=>{
        this.setState({
            conferenceStatus: true
        });
    };
    toggleConferenceStatus = () => {
        this.setState({
            conferenceStatus: !this.state.conferenceStatus
        });
    };

    toggleMicrophoneStatus = () => {
        this.setState({
            microphoneStatus: !this.state.microphoneStatus
        });
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
                    startConferenc={this.startConferenc}
                    runCallTimer={this.runCallTimer}
                    toggleConferenceStatus={this.toggleConferenceStatus}
                    conferenceStatus={this.state.conferenceStatus}
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
                    changeCallLine={this.changeCallLine}
                />
            </div>
        );
    }
}

export default Main;