import React from "react";
import KeyboardWrapper from "./keyboardBlock/KeyboardWrapper"
import VisualPanel from "./VisualPanel/VisualPanel";
import "./main.scss";


function Main() {
    return(
        <div className="main-wrapper d-flex flex-column justify-content-around">
        <KeyboardWrapper/>
        <VisualPanel/>
        </div>
    )
}
export default Main