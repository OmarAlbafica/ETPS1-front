import React, { Component } from 'react';
import Input from "../forms/Input";
import { Link } from "react-router-dom";

export default class ListaEscuelas extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="form-field">
          <br />
          <Link to="/facultades" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/facultades/id/escuelas/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nueva Escuela
          </Link>
        </div>
        <h3 style={{ marginBottom: "50px" }}>Listado de Escuelas</h3>
        <Input
          icon="account_circle"
          type="text"
          name="buscar"
          label="Buscar"
          onChange={this.onChange}
        />
        <div class="row" style={{ paddingTop: "50px" }} >

          <table class="responsive-table striped" style={{ paddingTop: "50px" }} >
            <thead>
              <tr>

                <th>Escuelas</th>
                <th>Asignatura</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Escuela de ciencias aplicadas</td>
                <td><Link to="/facultades/id/escuelas/id/asignaturas/add" class="waves-effect blue-grey lighten-2 waves-light btn">Ver Asignaturas</Link></td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Escuela de ciencias aplicadas</td>
                <td><Link to="/facultades/id/escuelas/id/asignaturas/add" class="waves-effect blue-grey lighten-2 waves-light btn">Ver Asignaturas</Link></td>
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
