import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom"
import useRandomColor from "../../../../../../hooks/useRandomColor";
import phoneBook from "../../../../../Main/commonStatic"
import {AbsolutePatht} from "../../../../../../Context/Context";
import "./ClientCaed.scss"
import RenderOfConditionContact from "./RenderOfConditionContact";
import StarActive from "../../../../../common/icon/stars/StarActive";
import StarPass from "../../../../../common/icon/stars/StarPass";

const ClientCard = ({client}) => {
    const {id} = useParams();

    const absolutePath = useContext(AbsolutePatht);
    const color = useRandomColor();
    const {name, number, email, work, position, phoneBookArr, avatar, title} = phoneBook[id]

    console.log(avatar);


    return (

        <div className="common-client-card-wrapper h-100 w-100 d-flex flex-column">
            <div
                className="settings-page-header  d-flex flex-nowrap position-relative justify-content-center align-items-center">
                <Link className="settings-link-arrow-icon d-flex " to={`${absolutePath}/ContactPage`}>
                    <i className="fas fa-chevron-left"/>
                </Link>
            </div>
            <div className="client-card-body  d-flex flex-column align-items-center">

                        <StarPass />

                <div
                    className="phone-book-avatar d-flex justify-content-center align-items-center  position-relative"
                    style={{backgroundImage: `url(${avatar})`, backgroundColor: color[0], color: color[1]}}
                >
                    {avatar ? "" : name.charAt(0).toUpperCase()}
                </div>
                <RenderOfConditionContact
                    name={name}
                    number={number}
                    phoneBookArr={phoneBookArr}
                    email={email}
                    work={work}
                    position={position}
                    title={title}/>
            </div>
        </div>
    );
};

export default ClientCard;
