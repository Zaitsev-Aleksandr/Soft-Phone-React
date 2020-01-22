import  React from "react"



const  Callinfo = (props) =>{
    return(
        <div className="call-info text-nowrap">
            <span className="client-number mr-3">{props.clientNumber}</span>
            <span>{props.clientName}</span>
        </div>
    )
};

export default Callinfo