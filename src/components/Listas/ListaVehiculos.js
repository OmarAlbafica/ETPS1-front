import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaVehiculos extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" >
          <h3>Vehiculos</h3>
          <br />
          <Input
            icon="account_circle"
            type="text"
            name="buscar"
            label="Buscar"
            onChange={this.onChange}
          />
          <br />
          <table className="responsive-table striped" >
            <thead>
              <tr>

                <th>Vehiculo</th>
                <th>Precio</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Microbus</td>
                <td>$25.00</td>
                <td>Editar</td>
                <td>Eliminar</td>
              </tr>
              <tr>
                <td>Pickut</td>
                <td>$10.00</td>
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
