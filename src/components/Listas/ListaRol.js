import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaRol extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" >
          <h3>Roles</h3>
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

                <th>Rol</th>
                <th></th>
                <th></th>

              </tr>
            </thead>

            <tbody>
              <tr>
            <td>Administrador</td>
            <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
            <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>
        <tr>
            <td>Usuario</td>
            <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
            <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>
        <tr>
            <td>Usuario</td>
            <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
            <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>
        <tr>
            <td>Usuario</td>
            <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
            <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>   


            </tbody>
          </table>
        </div>
      </div >
    )
  }
}
