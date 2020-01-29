import React from 'react';
import CloseIcon from "../../../common/icon/CloseIcon";
import Input from "../../../common/inputs/Input";

const InputSection = ({addSearch, startSearch}) => {
    return (
        <div className="search-input-section d-flex flex-nowrap align-items-center">
            <CloseIcon onClick={addSearch}/>
            <Input onChange={startSearch}/>
        </div>
    );
};

export default InputSection;
