import React from 'react'
import PropTypes from 'prop-types'


const Cita = ({cita,eliminarCita}) => {
    return ( 
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>fecha: <span>{cita.fecha}</span></p>
            <p>hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button 
                className="button eliminar u-full-width"
                onClick={()=> eliminarCita(cita.id)}
            >
                eliminar &times;
            </button>
        </div>
     );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;