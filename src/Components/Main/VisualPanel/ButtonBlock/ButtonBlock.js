import React from "react";
import Button from "../../../../CommonComponens/Button"
import "./style.scss"

function ButtonBlock() {
    return (
        <div className="button-block d-flex flex-lg-nowrap align-items-center justify-content-around">
            <Button className="action-button red-style" value={<i className="fas fa-phone-slash"/>}/>
            <Button className="action-button green-style" value={<i className="fas fa-phone"/>}/>
            <Button className="action-button loudly-style" value={<i className="fas fa-volume-mute"/>}/>
        </div>
    )
}

export default ButtonBlock