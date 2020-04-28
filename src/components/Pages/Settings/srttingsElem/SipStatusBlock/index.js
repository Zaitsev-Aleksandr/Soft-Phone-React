import React, {useState} from 'react';
import UpArrow from "../../../../common/icon/arrow/UpArrow";

const statusValueArr = [
    {
        status: "active",
        innerText: "Сейчас активен"
    },
    {
        status: "out",
        innerText: "Нет на месте"
    },
    {
        status: "invisibility",
        innerText: "Невидимка "
    },
    {
        status: "relaxation",
        innerText: "Не беспокоить "
    },
];


const SipStatusBlock = ({ changeSipStatus }) => {
    const [selectedSip,changeSip]=useState(0);
    const [sipBlockIsOpen,openSipBlock]=useState(false);

const clickSipList=(i, status)=>{
    openSipBlock(false);
    changeSip(i);
    changeSipStatus(status)
};
    const childrenElem = statusValueArr.map((elem , i)=>
        <li className={`sip-status-list ${elem.status} ${selectedSip===i ? "selected":""}`} key={elem.status} onClick={()=>clickSipList(i, elem.status)}><span> {elem.innerText}</span></li>
    );

    return (
        <div className=" position-relative">
            <ul className={`sip-status-block d-flex flex-column position-relative ${ sipBlockIsOpen?"open":""}`}>
                <UpArrow onClick={() => {
                    openSipBlock(!sipBlockIsOpen);
                }}/>
                {childrenElem}
            </ul>
        </div>
    );
};

export default SipStatusBlock;
