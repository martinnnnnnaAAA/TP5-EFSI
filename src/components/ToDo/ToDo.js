import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './ToDo.css';

const ToDo = ({texto = "default", fechayhora = "default", id = "default", fechayhoraT = "default", Lista = "", setLista}) => {
  const EliminarToDo = () => {
    if (window.confirm("¿Seguro deseas eliminar este ToDo?")){
        const nuevoToDo = Lista.filter(ToDo => { return !(ToDo.id === id);});
    
      setLista(nuevoToDo);
    }
    }
  const [tachado, setTachado] = useState(false);
  
  
  let ToDoActual = Lista.find(n => n.id === id)
if(tachado){
ToDoActual.fechayhoraT = new Date().toLocaleString()
}
else{
ToDoActual.fechayhoraT = ""
}
  
return(
  <li>
    <div className={tachado ? "Si": "No"}> 
    <Input type="checkbox" setTachado={setTachado} tachado={tachado}/>
    <p>texto: {texto} fechayhora: {fechayhora} fechayhoraT: {ToDoActual.fechayhoraT} </p>
  </div>
    <Button type = "null" EliminarToDo={EliminarToDo} text = "Eliminar ToDo ×" clase = "button-elimnar u-full-width"/> 
  </li>
)
}


export default ToDo;