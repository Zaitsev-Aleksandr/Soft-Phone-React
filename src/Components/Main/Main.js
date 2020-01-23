import React from "react";
import "./main.scss";

import FotterButtonGrope from "./VisualPanel/visualPanelComponents/footerButtongroup";
import VirtualMonitorBlock from "./VisualPanel/visualPanelComponents/DisplayInfoBlock/VirtualMonitorBlock";
import ButtonBlock from "./VisualPanel/visualPanelComponents/ButtonBlock/ButtonBlock";
import IncomingButtonBlock   from "./keyboardBlock/KeyboardWrapper/keyboardWrapperBlocks/IncomingLineButtons/IncomingButtonBlock";
import MainButtonBlock from "./keyboardBlock/KeyboardWrapper/keyboardWrapperBlocks/MainButtons/MainButtonBlock";
import NawBarDuttonBlock from "./keyboardBlock/KeyboardWrapper/keyboardWrapperBlocks/NawBarButton/NawBarButton";


function Main() {
    return (
        <>
            <div className="main-wrapper d-flex flex-column justify-content-around position-relative">
                <VirtualMonitorBlock/>
                <ButtonBlock/>
                <div className="keyboard-wrapper d-flex flex-wrap">
                    <IncomingButtonBlock/>
                    <MainButtonBlock/>
                    <NawBarDuttonBlock/>
                </div>
              <FotterButtonGrope/>
            </div>

            <div className="main-wrapper d-flex flex-column justify-content-around position-relative">
                <VirtualMonitorBlock/>
                <ButtonBlock/>
                <IncomingButtonBlock/>
                <div className="keyboard-wrapper d-flex flex-wrap">
                    <MainButtonBlock/>
                    <NawBarDuttonBlock/>
                </div>
                <FotterButtonGrope/>
            </div>
        </>

    )
}

export default Main