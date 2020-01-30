import React from 'react';
import Input from "../../common/inputs/Input";

import "./index.scss"

const CommonContact = ({enterValue,updateEnterValue, contactValueName, contactValueNumber}) => {
    const nameElemValue= <Input className="enter-phone-name text-center" onChange={updateEnterValue} value={contactValueName} />;
    const phoneElemValue = <Input className="enter-phone-number text-center" onChange={updateEnterValue} placeholder="Введите контактные данные" autofocus="autoFocus" value={!contactValueNumber? enterValue:contactValueNumber}/>

    return (
        <div className="contact-input-output-group d-flex flex-column justify-content-end">
            {contactValueName? nameElemValue:""}
            {phoneElemValue}
        </div>
    );
};

export default CommonContact;