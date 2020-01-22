import React from "react";
import VisualPanel from "./VisualPanel/VisualPanel";

import "./main.scss";
import KeyboardWrapper from "./keyboardBlock/KeyboardWrapper";


function Main() {
    return (
        <>
            <div className="main-wrapper d-flex flex-column justify-content-around">
                <VisualPanel/>
                <KeyboardWrapper/>
            </div>


            <div className="main-wrapper d-flex flex-column justify-content-around">
                <VisualPanel/>
            </div>
        </>

    )
}

export default Main