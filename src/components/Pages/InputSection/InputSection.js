import React from 'react';
import CloseIcon from "../../common/icon/CloseIcon";
import Input from "../../common/inputs/Input";
import {Link} from "react-router-dom";

const InputSection = ({value, startSearch, clearSearchInput,absolutePath}) => {
    return (
        <div className="search-input-section d-flex flex-nowrap align-items-center">
            <Link
                className="navigation-call-info-link info-link-arrow-icon " to={`${absolutePath}/SoftPhone`}
                         >
                <i className="fas fa-chevron-left"/>
            </Link>

            <Input
                onChange={startSearch}
                value={value}
                placeholder="Поиск"
                autofocus="autoFocus"/>
            {value ? <CloseIcon onClick={clearSearchInput}/> : ""}

        </div>
    );
};

export default InputSection;
