import React from "react";
import Button from "./button"


function ButtonBlock() {
    return  (
      <div className="button-block d-flex flex-lg-nowrap align-items-center justify-content-around">
          <Button className="action-button red-style" value={<i className="fas fa-phone-slash"></i>}></Button>
          <Button className="action-button green-style" value={<i className="fas fa-phone"></i>}></Button>
          <Button className="action-button loudly-style" value={<i className="fas fa-volume-mute"></i>}></Button>
      </div>
    )
}

export default ButtonBlock