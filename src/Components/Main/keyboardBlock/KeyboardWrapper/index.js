import React from "react";
import MainButtonBlock from "./keyboardWrapperBlocks/MainButtons/MainButtonBlock";
import "./style.scss"
import NawBarDuttonBlock from "./keyboardWrapperBlocks/NawBarButton/NawBarButton";
class KeyboardWrapper
    extends React.Component {
    render() {
        return (
            <div className="keyboard-wrapper d-flex flex-wrap">
                <MainButtonBlock/>
                <NawBarDuttonBlock/>
            </div>
        )
    }
}

export default KeyboardWrapper;
