import React, {useState} from 'react';
import {passKeyValues} from "../statics";
import Button from "../../../common/Button";
import Subvalue from "../Subvalue";

const PassCallkeyboardGroup = ({updateEnterValue, keyboardStatus}) => {

    const [subValue, setSubValue] = useState(null)
    const subValueComponent = (elem) => {
        if (keyboardStatus.open) return (
            <Subvalue
                className={"sub-value-keyboard-item d-flex flex-nowrap"}
                subValue={elem.dropDownItems.reduce((sum, item) => sum + item, "")}
            />
        )
    }
    let timerID
    const enterButtonValueDown = (elem, e) => {

        function cloneEvent(e) {
            if (e === undefined || e === null) return undefined;

            function ClonedEvent() {
            }

            let clone = new ClonedEvent();
            for (let p in e) {
                let d = Object.getOwnPropertyDescriptor(e, p);
                if (d && (d.get || d.set)) Object.defineProperty(clone, p, d); else clone[p] = e[p];
            }
            Object.setPrototypeOf(clone, e);
            return clone;
        }

        const eventValue = cloneEvent(e)

        if (e.type === "mousedown") {
            timerID = setTimeout(() => {
                setSubValue(true)
                return updateEnterValue(eventValue, elem.dropDownItems[0])
            }, 1000)
        }
    }
    const enterButtonValueUp = (e) => {
        clearTimeout(timerID)
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
