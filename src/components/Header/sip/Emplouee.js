import React from 'react';

const Employee = ({sip, fullName}) => {
    return (
        <div className="d-flex flex-nowrap w-100 px-2">
             <span className="employee-sip">
                {sip}
            </span>
            <span className="employee-full-name text-nowrap">
                {fullName}
            </span>
        </div>
    );
};

export default Employee;
