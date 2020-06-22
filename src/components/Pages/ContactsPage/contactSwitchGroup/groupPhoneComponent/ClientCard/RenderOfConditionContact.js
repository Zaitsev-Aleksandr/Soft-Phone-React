import React from 'react';
import MakeCall from "../../../../../common/icon/MakeCall";
import "./ClientCaed.scss"
import EmailIcon from "../../../../../common/icon/EmailIcon";

const RenderOfConditionContact = ({name, number, phoneBookArr, email, work, position, title}) => {

    const commonInfo = (value, className, icon) => value ?
        <div className={className}> {icon ? icon : null} {value} </div> : null;
    const phoneList = [number, ...phoneBookArr].map((elem, i) =>  <div className="phone-number__item" key={i}>< MakeCall/> {elem} </div>);

    return (
        <>
            {commonInfo(work, "work-info__item")}
            {commonInfo(name, "name-info__item")}
            {commonInfo(position, "position-info__item")}
            <div className="phone-number-group w-100 d-flex flex-column ">
                {phoneList}
            </div>
            {commonInfo(email, "email-info__item", <EmailIcon/>)}
            {commonInfo(title, "title-info__item")}
        </>
    )

};

export default RenderOfConditionContact;
