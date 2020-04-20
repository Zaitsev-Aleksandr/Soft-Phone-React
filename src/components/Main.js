import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./Header";
import PhoneContent from "./Pages";
import NavGroup from "./PhonePagesComponents/NavGrop";
import ActionCreateInCommCallButton from "./InComingCall/inComingCallComponents/ActionCreateInCommCallButton";
import phoneBook from "./commonStatic"
import {EndComingCallContext} from "./../Context/Context";
import "./Main.scss";
import "./MainCloses.scss"


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
                inComingCall: false
            })
        }
        return arr
    };

    LINE_CONTROL_MODULE = {
        freeLine: (arr, i) => {
            arr[i].displayValue = false;
            arr[i].contactValueName = ""
            arr[i].contactValueNumber = "";
            arr[i].callStatus = false;
            arr[i].holdLine = false;
            arr[i].conferenceActive = false;
            arr[i].startCallTime = "";
            arr[i].inComingCall = false
        },
        activeLine: (arr, Name, Number, i) => {
            arr[i].displayValue = true;
            arr[i].contactValueName = Name;
            arr[i].contactValueNumber = Number;
            arr[i].callStatus = true;
            arr[i].holdLine = false;
            arr[i].conferenceActive = false;
            arr[i].startCallTime = Date.now();
            arr[i].inComingCall = false
        },
        holdCallLine: (arr, i) => {
            arr[i].displayValue = false;
            arr[i].holdLine = true;
            arr[i].conferenceActive = false;
        },
        callWaitingLine: (arr, i) => {
            arr[i].displayValue = false;
            arr[i].contactValueName = ""
            arr[i].contactValueNumber = "";
            arr[i].callStatus = false;
            arr[i].holdLine = true;
            arr[i].conferenceActive = false;
            arr[i].startCallTime = Date.now();
            arr[i].inComingCall = true
        },
        changeCallLine: (arr, i) => {
            arr[i].displayValue = true;
            arr[i].holdLine = false;
        }
    }
    cloneStateArr = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    };


    /*______________________this State____________________________________*/

    state = {
        sipStatus: "active",
        keyboardStatus:
            {
                open: true,        //keyboard status open or close by button in header soft phone
                active: true       //keyboard variant during a call when you need a enter number in soft phone
            },
        transferCall: false,
        enterValue: "",
        contactValueName: "",
        contactValueNumber: "",
        inComingLineArr: Main.createLineObj(),  //array of call line status
        conferenceStatus: false,
        commonConferenceArr: [],
        inComingCallArr: []
    };

    /*_________________________________________________________________________*/

    addInComingCall = () => {
        const randomItem = Math.floor(Math.random() * phoneBook.length)
        const clientValue = [phoneBook[randomItem].name, phoneBook[randomItem].number]
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const commonInfo = clientValue
        if (this.state.inComingLineArr.find(elem => !elem.callStatus)) {
            const index = cloneArr.findIndex(elem => !elem.callStatus);
            this.LINE_CONTROL_MODULE.callWaitingLine(cloneArr, index)

        }
        this.setState({
            inComingLineArr: cloneArr,
            inComingCallArr: [...this.state.inComingCallArr, commonInfo]
        })

    }
    endComingCall = (item) => {
        const cloneCallArr = this.cloneStateArr(this.state.inComingCallArr);
        const cloneLineArr = this.cloneStateArr(this.state.inComingLineArr);
        const newCloneCallArr = cloneCallArr.filter((elem, index) => index !== item)
        if (!newCloneCallArr.length) {
            this.LINE_CONTROL_MODULE.freeLine(cloneLineArr, cloneLineArr.findIndex(e => e.inComingCall))
        }
        this.setState({
            inComingLineArr: cloneLineArr,
            inComingCallArr: newCloneCallArr
        })
    }

    changeSipStatus = (status) => {
        this.setState({
            sipStatus: status
        })
    };

    endCallSession = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const index = cloneArr.findIndex(elem => elem.callStatus && elem.displayValue);
        const activeID = cloneArr.findIndex(elem => elem.callStatus && !elem.displayValue);
        this.LINE_CONTROL_MODULE.freeLine(cloneArr, index)

        if (cloneArr.find(elem => elem.callStatus && !elem.displayValue)) {
            this.LINE_CONTROL_MODULE.changeCallLine(cloneArr, activeID)
            this.setState({commonConferenceArr: []})
        }
        if (this.state.inComingCallArr.length !== 0 && cloneArr.filter(elem => elem.inComingCall).length ===0) {
            const i = cloneArr.findIndex(elem => !elem.callStatus);
            this.LINE_CONTROL_MODULE.callWaitingLine(cloneArr, i);

        }

        this.setState({
            enterValue: "",
            contactValueName: "",
            contactValueNumber: "",
            inComingLineArr: cloneArr
        });
    };

    takeInComingCall = (item) => {
        const cloneCallArr = this.cloneStateArr(this.state.inComingCallArr);
        const cloneLineArr = this.cloneStateArr(this.state.inComingLineArr);
        const newCloneCallArr = cloneCallArr.filter((elem, i) => {
            return i !== item
        })
        if (cloneLineArr.find(e => e.displayValue)) {
            this.LINE_CONTROL_MODULE.holdCallLine(cloneLineArr, cloneLineArr.findIndex(e => e.displayValue))
        }
        if (cloneLineArr.filter(e => e.callStatus).length <= 4) {
            const line = cloneLineArr.findIndex(e => e.inComingCall)
            if(!!~line) this.LINE_CONTROL_MODULE.activeLine(cloneLineArr, cloneCallArr[item][0], cloneCallArr[item][1], line)
            const index = cloneLineArr.findIndex(elem => !elem.callStatus);
            if (cloneLineArr.find(elem => !elem.callStatus)) this.LINE_CONTROL_MODULE.callWaitingLine(cloneLineArr, index);
        }
        this.setState({
            inComingLineArr: cloneLineArr,
            inComingCallArr: newCloneCallArr
        })
    }
    startCallSession = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const index = cloneArr.findIndex(elem => !elem.callStatus);
        const enterPhoneNumber = !this.state.contactValueNumber ? this.state.enterValue : this.state.contactValueNumber;
        cloneArr.forEach((elem, i) => {
            if (index >= 0 && index === i) {
                this.LINE_CONTROL_MODULE.activeLine(cloneArr, this.state.contactValueName, enterPhoneNumber, i)
            } else if (elem.callStatus && index !== i) {
                this.LINE_CONTROL_MODULE.holdCallLine(cloneArr, i)
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
                    this.LINE_CONTROL_MODULE.holdCallLine(cloneArr, i)
                }
                return elem;
            });
            if (cloneArr[index].callStatus) {
                this.LINE_CONTROL_MODULE.changeCallLine(cloneArr, index)
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

    };

    reloadCallState = () => {
        this.setState({
            enterValue: "",
            contactValueName: "",
            contactValueNumber: "",
            conferenceStatus: false,
        })
    };
//__________ Conference Function________
    setConference = (arr) => {
        this.setState({
            commonConferenceArr: arr
        })
    }
    removeConference = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        cloneArr.find(elem => elem.displayValue).conferenceActive = false;
        this.setState({
            inComingLineArr: cloneArr,
            commonConferenceArr: [],
            conferenceStatus: !this.state.conferenceStatus
        })
    }
    toggleConferenceStatus = () => {
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        cloneArr.find(elem => elem.displayValue).conferenceActive = true;
        this.toggleHoldLine();
        this.setState({
            inComingLineArr: cloneArr,
            conferenceStatus: !this.state.conferenceStatus
        });
    };

//________________ function for change keyboard pass active
    toggleKeyboard = () => {
        const cloneKeyboardStatus = {...this.state.keyboardStatus};
        cloneKeyboardStatus.active = !cloneKeyboardStatus.active;

        this.setState({
            keyboardStatus: cloneKeyboardStatus
        });
    };
    openKeyboard = () => {
        const cloneKeyboardStatus = {...this.state.keyboardStatus};
        cloneKeyboardStatus.open = !cloneKeyboardStatus.open;
        if (!cloneKeyboardStatus.active) cloneKeyboardStatus.active = !cloneKeyboardStatus.active;
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
            <EndComingCallContext.Provider value={{endComingCall: this.endComingCall}}>
                <div
                    className={`main d-flex flex-column position-relative ${!this.state.keyboardStatus.open ? "closes" : ""}`}>
                    <ActionCreateInCommCallButton addInComingCall={this.addInComingCall}/>
                    <Header
                        openKeyboard={this.openKeyboard}
                        keyboardStatus={this.state.keyboardStatus}
                        sipStatus={this.state.sipStatus}
                    />
                    <Router>
                        <PhoneContent
                            takeInComingCall={this.takeInComingCall}
                            inComingCallArr={this.state.inComingCallArr}
                            removeConference={this.removeConference}
                            changeSipStatus={this.changeSipStatus}
                            addSearch={this.addSearch}
                            toggleStyleSoftPhone={this.toggleStyleSoftPhone}
                            commonConferenceArr={this.state.commonConferenceArr}
                            setConference={this.setConference}
                            runCallTimer={this.runCallTimer}
                            toggleConferenceStatus={this.toggleConferenceStatus}
                            conferenceStatus={this.state.conferenceStatus}
                            toggleHoldLine={this.toggleHoldLine}
                            endCallSession={this.endCallSession}
                            startCallSession={this.startCallSession}
                            keyboardStatus={this.state.keyboardStatus}
                            updateContactValue={this.updateContactValue}
                            inComingLineArr={this.state.inComingLineArr}
                            updateEnterValue={this.updateEnterValue}
                            enterValue={this.state.enterValue}
                            contactValueName={this.state.contactValueName}
                            contactValueNumber={this.state.contactValueNumber}
                            changeCallLine={this.changeCallLine}
                            toggleKeyboard={this.toggleKeyboard}
                        />

                        <NavGroup
                            conferenceStatus={this.state.conferenceStatus}
                            inComingLineArr={this.state.inComingLineArr}
                        />


                    </Router>
                    {this.state.keyboardStatus.open ? <div className="logo-info">www.red-point.com.ua</div> : ""}

                </div>
            </EndComingCallContext.Provider>
        );
    }
}

export default Main;