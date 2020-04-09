import React from 'react';
import Button from "../../../common/Button";
import AddValue from "../../../common/icon/AddValue";
import "./index.scss"

const AddContact = () => {
    return (
        <Button
            className="add-contact-button d-flex flex-nowrap align-items-center justify-content-center"
            value={
                <>
                    <AddValue/>
                    <span className="text-nowrap"> Добавить контакт </span>
                </>
            }
        />
    )
};

export default AddContact;
