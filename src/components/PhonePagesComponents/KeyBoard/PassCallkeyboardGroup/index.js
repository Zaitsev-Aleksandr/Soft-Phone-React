import React from 'react';
import {passKeyValues} from "../statics";
import Button from "../../../common/Button";
import Subvalue from "../Subvalue";

const PassCallkeyboardGroup = ({updateEnterValue, keyboardStatus}) => {

    const subValueComponent = (elem) => {
        if (keyboardStatus.open) return (
            <Subvalue
                className={"sub-value-keyboard-item d-flex flex-nowrap"}
                subValue={elem.dropDownItems.reduce((sum, item) => sum + item, "")}
            />
        )
    }

    let timerID1 = null;

    const enterButtonValue = (elem, e) => {

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
            timerID1 = setTimeout(() => {
                return updateEnterValue(eventValue, elem.dropDownItems[0])
            }, 2000)
        } else {
            clearTimeout(timerID1);
            updateEnterValue(e)

        }
    }

    const item = passKeyValues.map((elem, i) =>
        <Button
            className={"flex-column align-items-center common-keyboard-button"}
            onMouseDown={(e) => {
                enterButtonValue(elem, e)
            }}
            onMouseUp={(e) => {
                updateEnterValue(e)
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
