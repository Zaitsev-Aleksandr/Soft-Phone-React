import React from "react"


const InputOutput =({className , clientValue})=>{
        return(
        <input disabled={"disabled"} className={`input-output d-flex' ${className}`} value={clientValue}/>
    )
   };


export default InputOutput