import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Citas";
import React from 'react';

function App() {
  //corroboramos si hay algo en localsorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales =[];
  }

  const [citas, guardarCitas] = useState(citasIniciales); 
  

  //useEffect agregamos citas a local storage cuando hay citas
useEffect(()=>{
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

  if(citasIniciales){
    console.log(citasIniciales)
    localStorage.setItem('citas',JSON.stringify(citas))
  }else{
    localStorage.setItem('citas', JSON.stringify([]))
  }
}, [citas])
  

  //eliminar cita
  const eliminarCita = id=>{
    const nuevaCita = citas.filter(cita=> cita.id !== id)
    guardarCitas(nuevaCita)
  }
  
  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }

  //Mensaje 
  const titulo = citas.length === 0 ? 'Agrega una nueva cita' : 'Administra tus citas'

  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita=>(
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;
