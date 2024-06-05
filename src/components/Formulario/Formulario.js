import React, { useState } from "react";
import "./Formulario.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Formulario = ({ Lista = "", setLista }) => {
  const crearToDo = (e) => {
    e.preventDefault();
    if (window.confirm("¿Seguro deseas agregar esta cita?")) {
      setLista([
        ...Lista,
        {
          texto: e.target.TextoIngresado.value,
          tachado: false,
          id: Date.now(),
          fechayhora: new Date().toLocaleString(),
          fechayhoraT: null,
        },
      ]);
    }
  };
  return (
    <>
      <form onSubmit={crearToDo}>
        <div className="input-container">
          <Input
            type="text"
            name="TextoIngresado"
            placeholder="Ingrese una tarea"
          />
          <Button
            type="Submit"
            text="Agregar Tarea"
          />
        </div>
      </form>
    </>
  );
};

export default Formulario;
