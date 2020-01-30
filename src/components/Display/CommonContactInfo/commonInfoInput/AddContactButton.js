import React from 'react';
import Button from "../../../common/Button";
import Addvalue from "../../../common/icon/AddValue";

import "./index.scss"

const AddContact = () => {
    return (
       <Button
           className="add-contact-button d-flex flex-nowrap align-items-center justify-content-around"
           value={<>
               <Addvalue/>
               <span className="text-nowrap">ДОБАВИТЬ КОНТАКТ</span>
               </>  }
       />
    );
};

export default AddContact;
