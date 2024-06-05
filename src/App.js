import './App.css';
import Titulo from './components/Titulo/Titulo';
import React, {useState} from "react";
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import ToDo from './components/ToDo/ToDo'
import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';
function App() {
  const [Lista, setLista] = useState([])
  const CalcularRapidez = () => {
    let menorTiempo = new Date(Lista[0].fechayhoraT) - new Date(Lista[0].fechayhora);
    let rapidez;
    Lista.forEach(n => {
        rapidez = new Date(n.fechayhoraT) - new Date(n.fechayhora);
        if(menorTiempo > rapidez){
            menorTiempo = rapidez;
        }
    });
    let objeto = Lista.find(n => new Date(n.fechayhoraT) - new Date(n.fechayhora) == menorTiempo)
    alert(`La tarea mas rapida fue: ${objeto.texto}`);
}

  return (
<div className = "container">
<Titulo text="To-Do List" />
<Formulario Lista = {Lista} setLista={setLista} />

<div class = "x">
<Listado Lista={Lista} setLista={setLista}/>
</div>

<Button text = "Calcular Tarea Más Rápida" CalcularRapidez={CalcularRapidez}/>






</div>

);
}

export default App;
