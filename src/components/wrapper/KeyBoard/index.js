import React from 'react';
import {keyValues} from "./statics";
import Button from "../../common/Button";

import "./index.scss"
import Subvalue from "./Subvalue";

const Keyboard = ({className, onClick}) => {

    const item = keyValues.map((elem, i) => <Button
        className={className}
        onClick={onClick}
        value={(
            <>
            {elem.defaultValue}
             <Subvalue subValue={elem.dropDownItems.reduce((sum, item)=> sum+item, "")}/>
            </>
        )}
        key={i}
    />);
    return (
        <div className="keyboard-button-group d-flex flex-wrap justify-content-between align-items-stretch">
            {item}
        </div>
    );
};

export default Keyboard;