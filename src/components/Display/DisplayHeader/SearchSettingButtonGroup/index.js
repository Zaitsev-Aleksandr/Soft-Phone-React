import React from 'react';
import {Link} from "react-router-dom";
import Search from "../../../common/icon/Search";
import Menu from "../../../common/icon/Menu";

const SearchSettingButtonGroup = () => {
    return (
        <>
            <Link className="navigation-call-info-link " to='/SearchPage'> <Search/></Link>
            <Menu/>
        </>
    );
};

export default SearchSettingButtonGroup;
