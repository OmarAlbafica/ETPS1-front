import React, { Component } from 'react'
import Input from "../forms/Input";
import { Link } from 'react-router-dom'

export default class ListaAsignaturas extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" >
          <div className="form-field">
            <br />
            <Link to="/facultades" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          </div>
          <h3>Asignaturas</h3>
          <br />
          <Input
            icon="account_circle"
            type="text"
            name="buscar"
            label="Buscar"
            onChange={this.onChange}
          />
          <table className="responsive-table striped" >
            <thead>
              <tr>

                <th>Asignatura</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>
            <tr>
                <td>Matematica</td>
        <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
          </tr>
        <tr>
      <td>Diseño grafico</td>
        <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
          </tr>

                <tr>
      <td>Matematica</td>
        <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
          </tr>
        <tr>
      <td>Diseño grafico</td>
        <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
          </tr>
                  <tr>
      <td>Matematica</td>
        <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
          </tr>
        <tr>
      <td>Diseño grafico</td>
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
