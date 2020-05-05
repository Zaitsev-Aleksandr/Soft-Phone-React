import React, {useState} from 'react';
import {passKeyValues} from "../statics";
import Button from "../../../common/Button";
import Subvalue from "../Subvalue";

const PassCallkeyboardGroup = ({updateEnterValue, keyboardStatus}) => {

    const [timerID, setTimerId]=useState()
    const [subValue, setSubValue] = useState(null)
    const subValueComponent = (elem) => {
        if (keyboardStatus.open) return (
            <Subvalue
                className={"sub-value-keyboard-item d-flex flex-nowrap"}
                subValue={elem.dropDownItems.reduce((sum, item) => sum + item, "")}
            />
        )
    }
       const enterButtonValueDown = (elem, event) => {
         
         event.persist();
         
               if (event.type === "mousedown") {
                setTimerId ( setTimeout(() => {
                      setSubValue(true)
                updateEnterValue(event, elem.dropDownItems[0])
            }, 1000))
        }
    }
    const enterButtonValueUp = (e) => {
        clearTimeout(timerID)
        setTimerId()
        if (e.type === "mouseup" && !subValue) {
            updateEnterValue(e)
        }
        setSubValue(null)
    }

       const item = passKeyValues.map((elem, i) =>
        <Button
            className={"flex-column align-items-center common-keyboard-button"}
            onMouseDown={(e) => {
                enterButtonValueDown(elem, e)
            }}
            onMouseUp={(e) => {
                enterButtonValueUp(e)
            }}
            value={(
                <>
                    {elem.defaultValue}
                    {subValueComponent(elem)}
                </>
            )}
            key={i}
        />);
    return (
        <>
            {keyboardStatus.open ? item : ""}
        </>
    );
};

export default PassCallkeyboardGroup;
