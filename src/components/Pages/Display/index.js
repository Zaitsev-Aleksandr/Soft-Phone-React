import React from 'react';
import "./index.scss"
import DisplayHeader from "./ScreenHeader";
import CommonContact from "./CommonContactInfo";
/*import DisplayFooter from "./DisplayFooter";*/

const ScreenGroup = ({updateContactValue, updateEnterValue}) => {
    return (
        <div className="phone-screen-block d-flex flex-column">
           <DisplayHeader

           />
            <CommonContact
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}

            />
            {/*{callStatus? <DisplayFooter
                microphoneStatus={microphoneStatus}
            />:""}*/}
        </div>
    );
};

export default ScreenGroup;
