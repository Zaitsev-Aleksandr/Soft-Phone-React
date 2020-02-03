import React from 'react';
import "./index.scss"
import ScreenHeader from "./ScreenHeader/ScreenHeader";
import CommonContact from "./CommonContactInfo";
import DisplayFooter from "./DisplayFooter";

const ScreenGroup = ({enterValue, updateEnterValue, contactValueName, contactValueNumber, callStatus}) => {
    return (
        <div className="phone-screen-block d-flex flex-column">
           <ScreenHeader

           />
            <CommonContact
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                enterValue={enterValue}
                updateEnterValue={updateEnterValue}
            />
            <DisplayFooter/>
        </div>
    );
};

export default ScreenGroup;
