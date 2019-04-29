import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaUsuarios extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" >
          <h3>Usuarios</h3>
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

                <th>Usuario</th>
                <th>Rol</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <td>admin</td>
                <td>Administrador</td>
                <td>Editar</td>
                <td>Eliminar</td>
              </tr>
              <tr>
                <td>Usuario</td>
                <td>Usuario</td>
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
