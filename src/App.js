import "./bootstrap.min.css"; // es de boswach
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import React, { Component } from "react";
import ListaCitas from "./components/ListaCitas";
export default class App extends Component {
  state = {
    citas: []
  };

  //cuando la aplicacion carga
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  crearNuevaCita = datos => {
    //crea una constante a la cual le agrego el valor actual de citas manteniendo el valor anterior
    this.setState({
      citas: [...this.state.citas, datos]
    });
  };

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];

    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinarias" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}
