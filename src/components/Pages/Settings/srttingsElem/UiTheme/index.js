import React, {useState} from 'react';
import UpArrow from "../../../../common/icon/arrow/UpArrow";

const statusValueArr = [["Стандартная тема","light-color-scheme"], ["Ночная тема","dark-color-scheme"], ["Оттенок Неба","sky-color-scheme"], ["Спокойная тема","minor-color-scheme"]]


const ColorScheme = ({ changeColorScheme}) => {
    const [selectedScheme, changeScheme] = useState(0);
    const [schemeBlockIsOpen, openSchemeBlock] = useState(false);

    const clickSipList = (elem, i) => {
        changeColorScheme(elem[1])
        openSchemeBlock(false);
        changeScheme(i)
            };
    const childrenElem = statusValueArr.map((elem, i) =>
        <li className={`sip-status-list  ${selectedScheme === i ? "selected" : ""}`} key={i}
            onClick={() => clickSipList(elem, i)}><span> {elem[0]}</span></li>
    );

    return (
        <div className=" position-relative">
            <ul className={`sip-status-block d-flex flex-column position-relative ${schemeBlockIsOpen ? "open" : ""}`}>
                <UpArrow onClick={() => {
                    openSchemeBlock(!schemeBlockIsOpen);
                }}/>
                {childrenElem}
            </ul>
        </div>
    );
};

export default ColorScheme;
