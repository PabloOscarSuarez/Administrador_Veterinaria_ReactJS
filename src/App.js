import "./bootstrap.min.css"; // es de boswach
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    citas: []
  };

  crearNuevaCita = datos => {
    //crea una constante a la cual le agrego el valor actual de citas manteniendo el valor anterior
    this.setState({
      citas: [...this.state.citas, datos]
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
        </div>
      </div>
    );
  }
}
