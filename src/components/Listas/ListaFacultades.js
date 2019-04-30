import React, { Component } from 'react';
import Input from "../forms/Input";
import { Link } from "react-router-dom";

export default class ListaFacultades extends Component {
  render() {
    return (
      <div class="container" style={{ marginTop: "20px", height: "70%" }}>
        <div className="form-field">
          <br />
          <Link to="/inicio" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/facultades/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nueva Facultad
          </Link>
        </div>
        <h3>Listado Facultades </h3>
        <br />
        <Input
          icon="account_circle"
          type="text"
          name="buscar"
          label="Buscar"
          onChange={this.onChange}
        />
        <div class="row" style={{ marginTop: "20px" }}>
          <h2></h2>
          <table class="responsive-table striped" style={{ marginTop: "20px" }}>
            <thead>
              <tr>

                <th>Facultad</th>
                <th>Escuelas</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Facultad de Informatica y Ciencias Aplicadas</td>
                <td ><Link to="/facultades/id/escuelas" class="waves-effect grey waves-light btn">Ver Escuela</Link></td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Facultad de Informatica y Ciencias Aplicadas</td>
                <td ><Link to="/facultades/id/escuelas" class="waves-effect grey waves-light btn">Ver Escuela</Link></td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr><tr>
                <td>Facultad de Informatica y Ciencias Aplicadas</td>
                <td ><Link to="/facultades/id/escuelas" class="waves-effect grey waves-light btn">Ver Escuela</Link></td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
