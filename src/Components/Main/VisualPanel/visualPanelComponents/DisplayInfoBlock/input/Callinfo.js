import  React from "react"



const  Callinfo = (props) =>{
    return(
        <div className="call-info text-nowrap">
            <p className="client-number m-0">{props.clientNumber}</p>
            <p className="m-0">{props.clientName}</p>
        </div>
    )
};

export default Callinfo