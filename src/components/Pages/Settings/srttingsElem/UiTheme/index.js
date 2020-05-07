import React, {useState} from 'react';
import RightArrom from '../../../../common/icon/arrow/RightArrow';
import SipStatus from '../../../../common/icon/SipStatus';

const statusValueArr = [["Стандартная тема","light-color-scheme"], ["Ночная тема","dark-color-scheme"], ["Оттенок Неба","sky-color-scheme"], ["Спокойная тема","minor-color-scheme"]]


const ColorScheme = ({ changeColorScheme}) => {
    const [selectedScheme, changeScheme] = useState(0);
    const [schemeBlockIsOpen, openSchemeBlock] = useState(false);

    const clickSipList = (elem, i) => {
        changeColorScheme(elem[1])
        openSchemeBlock(false);
        changeScheme(i)
        openSchemeBlock(!schemeBlockIsOpen)
            };
    const childrenElem = statusValueArr.map((elem, i) =>
        <div className={`sip-status-list  ${selectedScheme === i ? "selected" : ""}`} key={i}
            onClick={() => clickSipList(elem, i)}><SipStatus/><span> {elem[0]}</span></div>
    );

    return (
        <div className=" position-relative">
            <div className={`sip-status-block d-flex flex-column position-relative ${schemeBlockIsOpen ? "open" : ""}`}>
                <RightArrom onClick={() => {
                    openSchemeBlock(!schemeBlockIsOpen);
                }}/>
                {childrenElem}
            </div>
        </div>
    );
};

export default ColorScheme;
