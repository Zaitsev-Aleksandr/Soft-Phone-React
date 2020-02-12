import React from 'react';
import {callKeyValues} from "../statics";
import Subvalue from "../Subvalue";
import Button from "../../../../common/Button";

const ActiveCallKeyboardGroup = ({ toggleConferenceStatus, toggleHoldLine }) => {
   const changeButtonActive=(e)=>{
        e.currentTarget.classList.toggle("active")

    };

    const item =callKeyValues.map((elem, i) => <Button
         className={"d-flex flex-column  align-items-center common-call-keyboard-button"}
         onClick={i===2 ?(e)=>{changeButtonActive(e);toggleHoldLine()} : (e)=>{toggleConferenceStatus();changeButtonActive(e)}}
         value={(
             <>
                 {elem.defaultValue}
                 <Subvalue
                     className={ "sub-value-call-board-item d-flex flex-nowrap"}
                     subValue={elem.dropDownItems.reduce((sum, item) => sum + item, "")}
                 />
             </>
         )}
         key={i}
     />);
    return (
        <>
            {item}
        </>
    );
};

export default ActiveCallKeyboardGroup;
