import React from "react";

const Cita = ({ cita, eliminarCita }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">Mascota: {cita.mascota}</h3>
      <p className="card-text">Propietario: {cita.propietario}</p>
      <p className="card-text">Fecha: {cita.fecha}</p>
      <p className="card-text">Hora: {cita.hora}</p>
      <p className="card-text">Sintomas: {cita.sintomas}</p>
      <button className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Cita;
