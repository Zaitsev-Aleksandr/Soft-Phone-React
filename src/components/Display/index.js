import React from 'react';
import "./index.scss"
import ScreenHeader from "./ScreenHeader/ScreenHeader";
import CommonContact from "./CommonContactInfo";

const ScreenGroup = ({enterValue, addSearch, updateEnterValue, contactValueName, contactValueNumber, callStatus}) => {
    return (
        <div className="phone-screen-block">
           <ScreenHeader
               addSearch={addSearch}
               callStatus={callStatus}
           />
            <CommonContact
                contactValueName={contactValueName}
                contactValueNumber={contactValueNumber}
                enterValue={enterValue}
                updateEnterValue={updateEnterValue}
            />
        </div>
    );
};

export default ScreenGroup;
