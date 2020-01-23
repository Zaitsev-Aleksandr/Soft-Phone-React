import React from "react";
import "./main.scss";

import FotterButtonGrope from "./VisualPanel/visualPanelComponents/footerButtongroup";
import ButtonBlock from "./VisualPanel/ButtonBlock/ButtonBlock";
import IncomingButtonBlock   from "./keyboardBlock/KeyboardWrapper/keyboardWrapperBlocks/IncomingLineButtons/IncomingButtonBlock";
import MainButtonBlock from "./keyboardBlock/KeyboardWrapper/keyboardWrapperBlocks/MainButtons/MainButtonBlock";
import NawBarDuttonBlock from "./keyboardBlock/KeyboardWrapper/keyboardWrapperBlocks/NawBarButton/NawBarButton";
import CommonSpan from "./VisualPanel/visualPanelComponents/DisplayInfoBlock/input/CommonSpan";
import Callinfo from "./VisualPanel/visualPanelComponents/DisplayInfoBlock/input/Callinfo";


function Main() {
    return (
        <>
            <div className="main-wrapper d-flex flex-column justify-content-around position-relative">
                <div  className="virtual-monitor-block overflow-hidden d-flex flex-column align-items-center justify-content-between h-100 ">

                    <div className="timer-input d-flex flex-nowrap align-items-center w-100">
                        <i className="far fa-clock mr-1"/>
                        <CommonSpan className="local-time-value" clientValue={new Date().toLocaleTimeString()}/>
                        <CommonSpan className="time-value" clientValue="Входящий"/>
                    </div>

                    <Callinfo clientNumber="+38 099 345 77 65" clientName="Кирил Иванов"/>

                    <div className="timer-input d-flex flex-nowrap align-items-center w-100">
                        <i className="fas fa-stopwatch"/>
                        <CommonSpan className="time-value" clientValue="00:24"/>
                        <CommonSpan className={"text-nowrap text-right"} clientValue="sip : 908"/>
                    </div>
                </div>
                <ButtonBlock/>
                <div className="keyboard-wrapper d-flex flex-wrap">
                    <IncomingButtonBlock />
                    <MainButtonBlock />
                    <NawBarDuttonBlock />
                </div>
              <FotterButtonGrope />
            </div>

            <div className="main-wrapper d-flex flex-column justify-content-around position-relative">
                <div  className="virtual-monitor-block overflow-hidden d-flex flex-column align-items-center justify-content-between h-100 ">

                    <div className="timer-input d-flex flex-nowrap align-items-center w-100">
                        <i className="far fa-clock mr-1"/>
                        <CommonSpan className="local-time-value" clientValue={new Date().toLocaleTimeString()}/>
                        <CommonSpan className="time-value" clientValue="Соединение"/>
                    </div>

                    <Callinfo clientNumber="+38 097 467 44 87" clientName="Салтыков Юрий Петрович"/>

                    <div className="timer-input d-flex flex-nowrap align-items-center w-100">
                        <i className="fas fa-stopwatch"/>
                        <CommonSpan className="time-value" clientValue="03:12"/>
                        <CommonSpan className={"text-nowrap text-right"} clientValue="sip : 912"/>
                    </div>
                </div>
                <ButtonBlock />
                <IncomingButtonBlock />
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