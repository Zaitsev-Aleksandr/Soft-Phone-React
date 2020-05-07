import React, {useState} from 'react';
import RightArrom from '../../../../common/icon/arrow/RightArrow';
import SipStatus from '../../../../common/icon/SipStatus';

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
    openSipBlock(!sipBlockIsOpen);
};
    const childrenElem = statusValueArr.map((elem , i)=>
        <div className={`d-flex flex-nowrap sip-status-list ${elem.status} ${selectedSip===i ? "selected":""}`} key={elem.status} onClick={()=>clickSipList(i, elem.status)}><SipStatus/><span> {elem.innerText}</span></div>
    );

    return (
        <div className=" position-relative">
            <div className={`sip-status-block d-flex flex-column position-relative ${ sipBlockIsOpen?"open":""}`}>
                 <RightArrom onClick={() => {
                    openSipBlock(!sipBlockIsOpen);
                }}/>
                {childrenElem}
            </div>
        </div>
    );
};

export default SipStatusBlock;
