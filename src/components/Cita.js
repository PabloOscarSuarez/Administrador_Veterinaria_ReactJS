import React from "react";
import { connect } from "react-redux";
import { borrarCita } from "../redux/actions/citasActions";

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
const mapDispatchToProps = dispatch => {
  return {
    eliminarCita: id => {
      dispatch(borrarCita(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cita);
