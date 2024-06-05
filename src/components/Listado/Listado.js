import React from "react";
import ToDo from "../ToDo/ToDo";
import "./Listado.css";

const Listado = ({ Lista = "", setLista }) => {
  return (
    <ul>
        {
            Lista.map((n) => {
                return (
                  <ToDo
                    texto={n.texto}
                    tachado={n.tachado}
                    id={n.id}
                    fechayhora={n.fechayhora}
                    fechayhoraT={n.fechayhoraT}
                    Lista={Lista}
                    setLista={setLista}
                  />
                );
              })
        }
    </ul>
  )
};

export default Listado;
