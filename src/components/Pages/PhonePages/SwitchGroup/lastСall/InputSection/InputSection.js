import React from 'react';
import CloseIcon from "../../../../../common/icon/CloseIcon";
import Input from "../../../../../common/inputs/Input";

const InputSection = ({value, startSearch, clearSearchInput}) => {
    return (
        <div className="search-input-section d-flex flex-nowrap align-items-center">

            <Input
                onChange={startSearch}
                value={value}
                placeholder="Поиск"
                autofocus= "autoFocus"/>
            { value ? <CloseIcon onClick={clearSearchInput} />: ""}

        </div>
    );
};

export default InputSection;
