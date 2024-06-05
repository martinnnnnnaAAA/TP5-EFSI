import React from 'react';
import './Input.css';

const Input = ({type = "default", name = "default", placeholder = "default", setTachado, tachado}) => {
    if(type === "checkbox"){
        return(
            <>
                <input type= {type} onChange={() => setTachado(!tachado)} name={name} placeholder={placeholder}></input>
            </>
        )
    }
    return(
        <>
        <input type= {type} name={name} placeholder={placeholder}></input>
        </>
    )
}
export default Input;