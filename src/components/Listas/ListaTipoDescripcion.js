import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaTipoDescripcion extends Component {
  render() {
    return (
      <div className="container">
        <h3>Tipo de descripción</h3>
        <br />
        <Input
          icon="account_circle"
          type="text"
          name="buscar"
          label="Buscar"
          onChange={this.onChange}
        />
        <br />
        <div className="row">
          <table className=" striped">
            <thead>
              <tr>
                <th>Descripción</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Descripción X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Descripción X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Descripción X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Descripción X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Descripción X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Descripción X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
