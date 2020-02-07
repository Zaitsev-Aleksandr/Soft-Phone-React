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
    static cloneStateArr=()=>{
        return JSON.parse(JSON.stringify(Main.state.inComingLineArr));
    };
    static searchFreeLine = (arr) => {
        return arr.filter(elem => !elem.status)
    };

    /*______________________this State____________________________________*/

    state = {
        keyboardStatus: true,
        transferCall: false,
        microphoneStatus: true,
        searchActive: false,
        enterValue: "",
        personName: "",
        personNumber: "",
        conferenceStatus: false,
        inComingLineArr: Main.createLineObj()
    };

    /*_________________________________________________________________________*/

   cloneStateArr=()=>{
       return JSON.parse(JSON.stringify(this.state.inComingLineArr));
   };
    
    endCallSomeLine = (line) => {
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
        console.log(cloneArr);
    };

        startCallSession=()=>{
        const  cloneArr = this.cloneStateArr();
        this.searchFreeLine(cloneArr)
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
            callStatus: false,
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

    toggleCallStatus = () => {
        this.setState({
                callStatus: !this.state.callStatus
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


    render() {
        return (
            <div className="main d-flex flex-column">
                <Header/>

                <PhoneContent
                    callStatus={this.state.callStatus}
                    keyboardStatus={this.state.keyboardStatus}
                    transferCall={this.state.transferCall}
                    microphoneStatus={this.state.microphoneStatus}
                    searchActive={this.state.searchActive}
                    enterValue={this.state.enterValue}
                    personName={this.state.personName}
                    personNumber={this.state.personNumber}
                    conferenceStatus={this.state.conferenceStatus}
                    inComingLineArr={this.state.inComingLineArr}
                    endCallSomeLine={this.endCallSomeLine}
                    addSearch={this.addSearch}
                />
            </div>
        );
    }
}


export default Main;