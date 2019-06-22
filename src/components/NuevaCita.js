import React, { Component } from "react";
import uuid from "uuid";

export default class NuevaCita extends Component {
  state = {
    cita: {
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    },
    error: false
  };

  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("enviando informacion pedida");

    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      console.error("no se rellenaron los campos pedidos ");

      this.setState({ error: true });

      return;
    }

    this.props.crearNuevaCita(nuevaCita);
  };

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center b-5">
            Llena el formulario para crear una nueva cita
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Mascotas
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            {/*  FORM GRUPO */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de dueño"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            {/*  FORM GRUPO */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            {/*  FORM GRUPO */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintoma de la Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  name="sintomas"
                  className="form-control"
                  placeholder="Describe los Sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                />
              </div>
            </div>
            {/*  FORM GRUPO */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva cita "
            />
          </form>
        </div>
      </div>
    );
  }
}
