import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./Header";
import "./Main.scss"
import PhoneContent from "./Pages";
import NavGroup from "./PhonePagesComponents/NavGrop";


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
                conferenceActive: false,
                startCallTime: "",
                timeValue: {
                    seconds: "00",
                    minutes: "00"
                }
            })
        }
        return arr
    };

    cloneStateArr = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    };


    /*______________________this State____________________________________*/

    state = {
        activeElem: 0,
        keyboardStatus:
            {
                open: true,        //keyboard status open or close by button in header soft phone
                active: true       //keyboard variant during a call when you need a enter number in soft phone
            },
        transferCall: false,
        microphoneStatus: true,   // microphone status on or off
        searchActive: false,
        enterValue: "",
        contactValueName: "",
        contactValueNumber: "",
        inComingLineArr: Main.createLineObj(),  //array of call line status
        conferenceStatus: false,
        commonConferenceArr: []
    };

    /*_________________________________________________________________________*/

    setActiveElem = (i) => {
        this.setState({
            activeElem: i
        })
    };


    endCallSession = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const index = cloneArr.findIndex(elem => elem.callStatus === true && elem.displayValue === true);
        const activeID = cloneArr.findIndex(elem => elem.callStatus === true && elem.displayValue === false);
        cloneArr[index] = {
            displayValue: false,
            contactValueName: "",
            contactValueNumber: "",
            callStatus: false,
            conferenceActive: false,
            holdLine: false,
            startCallTime: "",
            timeValue: {
                seconds: "00",
                minutes: "00"
            }
        };
        if (activeID >= 0) {
            cloneArr[activeID].displayValue = true;
            cloneArr[activeID].holdLine = false;
            cloneArr[activeID].conferenceActive = false;
            this.setState({commonConferenceArr: []})
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

        const cloneArr = this.cloneStateArr(this.state.inComingLineArr).map(elem => {
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
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const index = cloneArr.findIndex(elem => elem.callStatus === false);
        const enterPhoneNumber = !this.state.contactValueNumber ? this.state.enterValue : this.state.contactValueNumber;
        cloneArr.forEach((elem, i) => {
            if (index >= 0 && index === i) {
                elem.callStatus = true;
                elem.contactValueName = this.state.contactValueName;
                elem.contactValueNumber = enterPhoneNumber;
                elem.displayValue = true;
                elem.startCallTime = Date.now();
            } else if (elem.callStatus === true && index !== i) {
                elem.holdLine = true;
                elem.displayValue = false;
            }

        });

        this.setState({
            inComingLineArr: cloneArr,

        });
        this.reloadCallState();
    };


    changeCallLine = index => {
        if (this.state.inComingLineArr.find(elem => elem.callStatus)) {
            const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
            if (cloneArr.findIndex(elem => elem.displayValue && elem.callStatus) === index) {
                cloneArr.find(elem => elem.displayValue && elem.callStatus).displayValue = false;
            }
            cloneArr.map((elem, i) => {
                if (elem.displayValue && elem.callStatus) {
                    elem.displayValue = false;
                    elem.holdLine = true
                } else if (elem.displayValue && !elem.callStatus) {
                    elem.displayValue = false;
                    elem.holdLine = false;
                    elem.callStatus = false;
                }
                return elem;
            });
            if (cloneArr[index].callStatus) {
                cloneArr[index].holdLine = false;
                cloneArr[index].displayValue = true;
            } else if (!cloneArr[index].callStatus && !cloneArr[index].displayValue) {
                cloneArr[index].callStatus = false;
                cloneArr[index].holdLine = false;
                cloneArr[index].displayValue = true;
            } else if (!cloneArr[index].callStatus && cloneArr[index].displayValue) {
                cloneArr[index].callStatus = false;
                cloneArr[index].displayValue = false;
                cloneArr[cloneArr.findIndex(elem => elem.callStatus)].holdLine = false;
                cloneArr[cloneArr.findIndex(elem => elem.callStatus)].displayValue = true;
            }

            this.setState({
                inComingLineArr: cloneArr
            })
        }
    };

    toggleHoldLine = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const index = cloneArr.findIndex(elem => elem.callStatus && elem.displayValue);
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
            keyboardStatus:
                {
                    open: true,
                    active: true
                },
            microphoneStatus: true,
            enterValue: "",
            contactValueName: "",
            contactValueNumber: "",
            conferenceStatus: false,
        })
    };
//__________ Conference Function________

    toggleConferenceStatus = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        cloneArr.find(elem => elem.displayValue).conferenceActive = true;
        this.toggleHoldLine();
        this.setState({
            inComingLineArr: cloneArr,
            conferenceStatus: !this.state.conferenceStatus
        });
    };

    //  ___________  On Off Microphone Function____

    toggleMicrophoneStatus = () => {
        this.setState({
            microphoneStatus: !this.state.microphoneStatus
        });
    };


    //________________ function for change keyboard pass active
    toggleKeyboard = () => {
        const cloneKeyboardStatus = {...this.state.keyboardStatus};
        cloneKeyboardStatus.active = !cloneKeyboardStatus.active;
        this.setState({
            keyboardStatus: cloneKeyboardStatus
        });
        if (!this.state.keyboardStatus.open) {
            this.openKeyboard()
        }

    };
    openKeyboard = () => {
        const cloneKeyboardStatus = {...this.state.keyboardStatus};
        cloneKeyboardStatus.open = !cloneKeyboardStatus.open;
        this.setState({
            keyboardStatus: cloneKeyboardStatus
        });

    };

    toggleTransfer = () => {
        this.setState({
            transferCall: !this.state.transferCall
        })
    };

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="main d-flex flex-column">
                <Header openKeyboard={this.openKeyboard}/>
                <Router>
                    <PhoneContent
                        setActiveElem={this.setActiveElem}
                        addSearch={this.addSearch}
                        toggleStyleSoftPhone={this.toggleStyleSoftPhone}
                        commonConferenceArr={this.state.commonConferenceArr}
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
                        toggleKeyboard={this.toggleKeyboard}
                    />

                    <NavGroup
                        setActiveElem={this.setActiveElem}
                        activeElem={this.state.activeElem}
                        conferenceStatus={this.state.conferenceStatus}
                        inComingLineArr={this.state.inComingLineArr}
                    />


                </Router>
                <div className="logo-info"><a href="www.red-point.com.ua" target="_blank">www.red-point.com.ua</a></div>
            </div>
        );
    }
}

export default Main;