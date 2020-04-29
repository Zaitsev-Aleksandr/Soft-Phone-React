import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Header from "../Header";
import PhoneContent from "../Pages";
import NavGroup from "../PhonePagesComponents/NavGrop";
import ActionCreateInCommCallButton
    from "../ActionCall/InComingCall/inComingCallComponents/ActionCreateInCommCallButton";
import phoneBook from "./commonStatic"
import {
    FREE_LINE,
    ACTIVE_LINE,
    HOLD_LINE,
    CALL_WAITING_LINE,
    CHANGE_LINE, TRANSFER_LINE
} from "../../directionFunctional/lineControlModule"
import {EndComingCallContext} from "../../Context/Context";
import "./styles/Main.scss";
import "./styles/MainCloses.scss"
import "./styles/darkScheme.scss"


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
                transferActive: false,
                startCallTime: "",
                inComingCall: false
            })
        }
        return arr
    };

    cloneStateArr = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    };


    /*______________________this State____________________________________*/

    state = {
        colorScheme: "light-color-scheme",
        sipStatus: "active",
        keyboardStatus:
            {
                open: true,        //keyboard status open or close by button in header soft phone
                active: true     //keyboard variant during a call when you need a enter number in soft phone
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
    changeColorScheme = (value) => {
        this.setState({
            colorScheme: value
        })
    }
    addInComingCall = () => {
        const randomItem = Math.floor(Math.random() * phoneBook.length)
        const clientValue = [phoneBook[randomItem].name, phoneBook[randomItem].number]
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const commonInfo = clientValue
        if (this.state.inComingLineArr.find(elem => !elem.callStatus)) {
            const index = cloneArr.findIndex(elem => !elem.callStatus);
            CALL_WAITING_LINE(cloneArr, index)

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
            FREE_LINE(cloneLineArr, cloneLineArr.findIndex(e => e.inComingCall))
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
        FREE_LINE(cloneArr, index)

        if (cloneArr.find(elem => elem.callStatus && !elem.displayValue)) {
            CHANGE_LINE(cloneArr, activeID)
            this.setState({commonConferenceArr: []})
        }
        if (this.state.inComingCallArr.length !== 0 && cloneArr.filter(elem => elem.inComingCall).length === 0) {
            const i = cloneArr.findIndex(elem => !elem.callStatus);
            CALL_WAITING_LINE(cloneArr, i);
        }
        if (this.state.inComingCallArr.length === 0 && cloneArr.filter(elem => elem.inComingCall).length !== 0) {
            const i = cloneArr.findIndex(elem => elem.inComingCall);
            FREE_LINE(cloneArr, i)
        }
        const newKeyboardStatus = {...this.state.keyboardStatus}
        newKeyboardStatus.active = true;

        this.setState({
            keyboardStatus: newKeyboardStatus,
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
            HOLD_LINE(cloneLineArr, cloneLineArr.findIndex(e => e.displayValue))
        }
        if (cloneLineArr.filter(e => e.callStatus).length < 4) {
            const line = cloneLineArr.findIndex(e => e.inComingCall)
            if (!!~line) ACTIVE_LINE(cloneLineArr, cloneCallArr[item][0], cloneCallArr[item][1], line)
            const index = cloneLineArr.findIndex(elem => !elem.callStatus);
            if (cloneLineArr.find(elem => !elem.callStatus) && newCloneCallArr.length) CALL_WAITING_LINE(cloneLineArr, index);
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
        const newKeyboardStatus = {...this.state.keyboardStatus}
        if (newKeyboardStatus.open) newKeyboardStatus.active = true;
        if (!this.state.transferCall) {
            cloneArr.forEach((elem, i) => {
                if (index >= 0 && index === i) {
                    ACTIVE_LINE(cloneArr, this.state.contactValueName, enterPhoneNumber, i)
                } else if (elem.callStatus && index !== i) {
                    HOLD_LINE(cloneArr, i)
                }
            });
        } else if (this.state.transferCall) {
            this.startTransferSession(cloneArr)
        }

        this.setState({
            inComingLineArr: cloneArr,
            keyboardStatus: newKeyboardStatus
        });

        this.reloadCallState();
    };

    startTransferSession = (cloneArr) => {
        const index = cloneArr.findIndex(e => e.transferActive)
        TRANSFER_LINE(cloneArr, index)
        setTimeout(() => {
            cloneArr[index].transferActive = false
            this.setState({
                inComingLineArr: cloneArr,
                transferCall: false
            });
        }, 5000)
    }
    toggleTransfer = () => {
        this.toggleHoldLine()
        const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
        const index = cloneArr.findIndex(e => e.displayValue);
        cloneArr[index].transferActive = true;
        cloneArr[index].holdLine = true;
        cloneArr[index].displayValue = false
              this.setState({
            inComingLineArr: cloneArr,
            transferCall: true
        });
    };


    changeCallLine = index => {
        if (this.state.inComingLineArr.find(elem => elem.callStatus)) {
            const cloneArr = this.cloneStateArr(this.state.inComingLineArr);
            if (cloneArr.findIndex(elem => elem.displayValue && elem.callStatus) === index) {
                cloneArr.find(elem => elem.displayValue && elem.callStatus).displayValue = false;
            }
            cloneArr.map((elem, i) => {
                if (elem.displayValue && elem.callStatus) {
                    HOLD_LINE(cloneArr, i)
                }
                return elem;
            });
            if (cloneArr[index].callStatus) {
                CHANGE_LINE(cloneArr, index)
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

    updateEnterValue = (e, subValue) => {
         const newKeyboardStatus = {...this.state.keyboardStatus}
        if (newKeyboardStatus.open) newKeyboardStatus.active = true;
        const regEx = /[^\+ || 0-9]/g;
        if (e.target.tagName.toLowerCase() === "input") {
            const enterNumber = e.target.value.replace(regEx, "")
            this.setState({
                enterValue: enterNumber,
                contactValueName: "",
                contactValueNumber: "",
                keyboardStatus: newKeyboardStatus
            })
        } else if (!subValue) {
            this.setState({
                enterValue: this.state.enterValue + e.currentTarget.innerText.slice(0, 1),
                contactValueName: "",
                contactValueNumber: "",
                keyboardStatus: newKeyboardStatus
            })
        } else {
            this.setState({
                enterValue: this.state.enterValue + subValue.slice(0, 1),
                contactValueName: "",
                contactValueNumber: "",

            })
        }
    };
    deleteEnterValue = () => {
        this.setState({
            enterValue: this.state.enterValue.slice(0, -1),
            contactValueName: "",
            contactValueNumber: "",
        })
    };

    updateContactValue = (e) => {
        const newKeyboardStatus = {...this.state.keyboardStatus}
        if (newKeyboardStatus.open) newKeyboardStatus.active = false;
        const numberValue = e.currentTarget.querySelector(".phone-book-item-number").innerHTML;
        this.setState({
            contactValueName: e.currentTarget.querySelector(".phone-book-item-name").innerHTML,
            contactValueNumber: numberValue,
            enterValue: numberValue,
            keyboardStatus: newKeyboardStatus

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


    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (document.querySelector(".initial-input")) {
            document.querySelector(".initial-input").onblur = function () {
                document.querySelector(".initial-input").focus();
            }
        }
    }

    render() {
        return (
            <EndComingCallContext.Provider value={{endComingCall: this.endComingCall}}>
                <div
                    className={`main d-flex flex-column position-relative ${!this.state.keyboardStatus.open ? "closes" : ""} ${this.state.colorScheme}`}>
                    <ActionCreateInCommCallButton addInComingCall={this.addInComingCall}/>
                    <Header
                        openKeyboard={this.openKeyboard}
                        keyboardStatus={this.state.keyboardStatus}
                        sipStatus={this.state.sipStatus}
                    />
                    <Router>
                        <PhoneContent
                            changeColorScheme={this.changeColorScheme}
                            transferCall={this.state.transferCall}
                            toggleTransfer={this.toggleTransfer}
                            deleteEnterValue={this.deleteEnterValue}
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
                            transferCall={this.state.transferCall}
                            conferenceStatus={this.state.conferenceStatus}
                            inComingLineArr={this.state.inComingLineArr}
                        />

                        {this.state.keyboardStatus.open ?
                            <a className="logo-info" target="_blank" rel="noopener noreferrer"
                               href="http://red-point.com.ua">www.red-point.com.ua</a> : ""}
                    </Router>
                </div>
            </EndComingCallContext.Provider>
        );
    }
}

export default Main;