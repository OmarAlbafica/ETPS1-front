import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaAsignaturas extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" >
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
                <td>Editar</td>
                <td>Eliminar</td>
              </tr>
              <tr>
                <td>Diseño grafico</td>
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
