import React from 'react';

const Employee = ({sip, fullName}) => {
    return (
        <div className="employee-common-info w-100 ">
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
