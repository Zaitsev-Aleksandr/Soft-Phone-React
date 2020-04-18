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
    const item = passKeyValues.map((elem, i) =>
        <Button
            className={"d-flex flex-column align-items-center common-keyboard-button"}
            onClick={updateEnterValue}
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
            {keyboardStatus.open? item:""}
        </>
    );
};

export default PassCallkeyboardGroup;
