import React, {useState} from 'react';
import UpArrow from "../../../../../common/icon/arrow/UpArrow";

const statusValueArr = ["Стандартная тема", "Ночная тема", "Оттенок Неба", "Спокойная тема"]


const UiTheme = () => {
    const [selectedSip, changeSip] = useState(0);
    const [sipBlockIsOpen, openSipBlock] = useState(false);

    const clickSipList = (i) => {
        openSipBlock(false);
        changeSip(i)
            };
    const childrenElem = statusValueArr.map((elem, i) =>
        <li className={`sip-status-list  ${selectedSip === i ? "selected" : ""}`} key={i}
            onClick={() => clickSipList(i)}><span> {elem}</span></li>
    );

    return (
        <div className=" position-relative">
            <ul className={`sip-status-block d-flex flex-column position-relative ${sipBlockIsOpen ? "open" : ""}`}>
                <UpArrow onClick={() => {
                    openSipBlock(!sipBlockIsOpen);
                }}/>
                {childrenElem}
            </ul>
        </div>
    );
};

export default UiTheme;
