import React from "react"


const CommonSpan =({className , clientValue})=>{
    return(
        <span className={`common-span d-flex' ${className}`} >{clientValue}</span>
    )
};


export default CommonSpan