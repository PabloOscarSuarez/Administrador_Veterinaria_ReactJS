import React, { Component } from "react";
import Cita from "./Cita";
//redux
import { connect } from "react-redux";
import { obtenerCitas } from "../redux/actions/citasActions";
import store from "../redux/store";
store.subscribe(() => {
  localStorage.setItem("citas", JSON.stringify(store.getState()));
});

class ListaCitas extends Component {
  componentDidMount() {
    this.props.listCitas();
  }

  render() {
    const { citas } = this.props;
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
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  citas: state.citas.citas
});

const mapDispatchToProps = dispatch => {
  return {
    listCitas: () => {
      dispatch(obtenerCitas());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaCitas);
