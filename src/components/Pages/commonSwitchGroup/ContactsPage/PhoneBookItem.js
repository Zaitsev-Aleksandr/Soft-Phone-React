import React from 'react';
import StarsPass from "../../../common/icon/StarsPass";
import {Link} from "react-router-dom";


const PhoneBookItem = ({name, number, updateContactValue,color ,setActiveElem ,i}) => {

    return (
        <div
            onClick={updateContactValue}
            className="phone-book-item d-flex flex-nowrap justify-content-start align-items-center position-relative">
            <StarsPass  onClick={(e)=>{
                e.currentTarget.classList.toggle("far");
                e.currentTarget.classList.toggle("fas")
            }
            }/>
            <div
                className="phone-book-avatar d-flex justify-content-center align-items-center mr-2"
                style={{backgroundColor: color[0], color: color[1]}}
            >
                {name.charAt(0).toUpperCase()}
            </div>
            <div className="d-flex flex-column">
                <span className="phone-book-item-name justify-content-between text-nowrap overflow-hidden">
                    {name}
                </span>
                <Link className="navigation-call-info-link "
                      to='/softPhone'
                      key={i}
                      onClick={() => setActiveElem(0)}
                >
                <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
                </Link>
            </div>
        </div>
    );
};



export default PhoneBookItem;
