import "./bootstrap.min.css"; // es de boswach
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import React, { Component } from "react";
import ListaCitas from "./components/ListaCitas";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinarias" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas />
          </div>
        </div>
      </div>
    );
  }
}
