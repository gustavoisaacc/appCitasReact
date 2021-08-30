import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
const { v1: uuid } = require('uuid');


const Formulario = ({crearCita}) => {
    //generar useState
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error, actualizarError] = useState(false)

    //funcion que se ejecuta cada ves que el usuario llena un campo
    const actualizarState = (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {mascota,propietario,fecha,hora,sintomas} = cita;
    
    const submitCita = e =>{
        e.preventDefault()
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return
        }

        //eliminar msg
        actualizarError(false)

        //generar id 
        cita.id = uuid()
        
        //cerar cita
        crearCita(cita)

        //reiniciar formulario
        actualizarCita({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  :null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea 
                    className="u-full-width" 
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >
                Agregar cita</button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;