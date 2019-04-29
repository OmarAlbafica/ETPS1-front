import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaSeguimientos extends Component {
  render() {
    return (
      <div class="container">
        <div class="row" >
          <h2>Jardin Botanico</h2>
          <br />
          <Input
            icon="account_circle"
            type="text"
            name="buscar"
            label="Buscar"
            onChange={this.onChange}
          />
          <br />
          <table class="responsive-table striped" >
            <thead>
              <tr>
                <th>N° De Estudiantes</th>
                <th>N° De Beneficiarios</th>
                <th>Descripcion</th>
                <th>Docente</th>
                <th>Evidencia</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>25</td>
                <td>10</td>
                <td>Una pequeña descricion del proyecto</td>
                <td>Docente 1</td>
                <td>Ruta de archivo</td>
                <td>Editar</td>
                <td>Eliminar</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
