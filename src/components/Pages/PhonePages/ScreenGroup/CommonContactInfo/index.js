import React, {Component} from 'react';
import ContactName from "./ContactInfo/ContactName";
import ContactNumber from "./ContactInfo/ContactNumber";
import AddContact from "./InputContact/AddContactButton";

class CommonContact extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <AddContact/>
                <ContactName/>
                <ContactNumber/>
            </div>
        );
    }
}

export default CommonContact;