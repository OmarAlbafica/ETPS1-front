import React, { Component } from 'react';
import Input from "../forms/Input";

export default class ListaGuiaTrabajo extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <h3 style={{ marginBottom: "50px" }}>Listado de Guias de Trabajo</h3>
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
              <th>Lugar</th>
              <th>Fecha</th>
              <th>Hora de Inicio</th>
              <th>Hora Final</th>
              <th>Tema</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jardin Botanico</td>
              <td>2019-04-15</td>
              <td>08:00</td>
              <td>10:00</td>
              <td>Flora y fauna</td>
              <td>agregar contenido</td>
              <td>vehiculo</td>
              <td>seguimiento</td>
              <td>Editar</td>
              <td>Eliminar</td>
            </tr>

          </tbody>
        </table>
        <br />
      </div>
    )
  }
}
