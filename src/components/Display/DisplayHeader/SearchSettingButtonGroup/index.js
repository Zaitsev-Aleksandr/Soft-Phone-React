import React from 'react';
import {Link} from "react-router-dom";
import Search from "../../../common/icon/Search";
import Menu from "../../../common/icon/Menu";

const SearchSettingButtonGroup = ({ absolutePath }) => {
    return (
        <>
            <Link className="navigation-call-info-link " to={`${absolutePath}/SearchPage`}> <Search/></Link>
            <Link className="navigation-call-info-link " to={`${absolutePath}/Settings`}> <Menu  /></Link>
        </>
    );
};

export default SearchSettingButtonGroup;
