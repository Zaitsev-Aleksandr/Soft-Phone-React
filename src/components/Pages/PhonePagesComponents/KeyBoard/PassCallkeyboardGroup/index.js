import React from 'react';
import {passKeyValues} from "../statics";
import Button from "../../../../common/Button";
import SubValue from "../Subvalue";

const PassCallkeyboardGroup = ({ updateEnterValue }) => {
    const item = passKeyValues.map((elem, i) => <Button
        className={"d-flex flex-column align-items-center common-keyboard-button"}
        onClick={updateEnterValue}
        value={(
            <>
                {elem.defaultValue}
                <SubValue
                    className={"sub-value-keyboard-item d-flex flex-nowrap"}
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

export default PassCallkeyboardGroup;
