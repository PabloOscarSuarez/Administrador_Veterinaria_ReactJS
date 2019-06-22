import React from "react";

const Cita = ({ cita }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{cita.mascota}</h3>
      <p className="card-text">{cita.propietario}</p>
      <p className="card-text">{cita.fecha}</p>
      <p className="card-text">{cita.hora}</p>
      <p className="card-text">{cita.sintomas}</p>
    </div>
  </div>
);

export default Cita;
