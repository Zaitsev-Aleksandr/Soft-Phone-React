import React, {Component} from 'react';
import {contactBook} from "../../../../SwitchGroup/ContactsPage/statics";

class SearchGroup extends Component {
    state={
        searchArr: contactBook.sort(function (a, b) {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0
        })
    };
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SearchGroup;