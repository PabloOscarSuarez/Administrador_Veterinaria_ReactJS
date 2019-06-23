import React from "react";
import Cita from "./Cita";

const ListaCitas = ({ citas, eliminarCita }) => {
  const mensajes =
    Object.keys(citas).length === 0
      ? "No hay citas nuevas"
      : "administrar citas nuevas";
  return (
    <div className="card mt-2 py-2">
      <div className="card-body">
        <h2 className="card-title tex-center">{mensajes}</h2>
        <div className="lista-citas">
          {citas.map(cita => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaCitas;
