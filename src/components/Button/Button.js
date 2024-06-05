import React from "react";
import "./Button.css";

const Button = ({
  text = "default",
  type = "default",
  clase = "null",
  EliminarToDo,
  CalcularRapidez = null,
}) => {
  if (clase === "button-elimnar u-full-width") {
    return(
      <>
    <button onClick={EliminarToDo} type={type} class={clase}>
      {text}
    </button>
    </>
    )
  }

if(CalcularRapidez != null){
  return(
    <>
  <button onClick={CalcularRapidez} type={type} class={clase}>
    {text}
  </button>
  </>
  )
}  
  return (
    <>
      <button type={type} class={clase}>
        {text}
      </button>
    </>
  );
};

export default Button;
