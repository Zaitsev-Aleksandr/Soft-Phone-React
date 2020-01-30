import React from 'react';
import CloseIcon from "../../../common/icon/CloseIcon";
import Input from "../../../common/inputs/Input";

const InputSection = ({value, addSearch, startSearch, clearSearchInput}) => {
    return (
        <div className="search-input-section d-flex flex-nowrap align-items-center">
            <i className="fas fa-chevron-left" onClick={addSearch}/>
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
