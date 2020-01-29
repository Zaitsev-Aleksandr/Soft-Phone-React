import React from 'react';
import "./index.scss"
import ScreenHeader from "./ScreenHeader/ScreenHeader";
import CommonContact from "./CommonContactInfo";

const ScreenGroup = ({addSearch}) => {
    return (
        <div className="phone-screen-block">
           <ScreenHeader addSearch={addSearch}/>
            <CommonContact/>
        </div>
    );
};

export default ScreenGroup;
