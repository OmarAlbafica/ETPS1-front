import React, { Component } from 'react';
import Input from "../forms/Input";

export default class ListaCiclos extends Component {
  render() {
    return (
      <div className="container">
        <h3>Lista de Ciclos</h3>
        <br />
        <Input
          icon="account_circle"
          type="text"
          name="buscar"
          label="Buscar"
          onChange={this.onChange}
        />
        buscar
        <div className="row">
          <table className=" striped">
            <thead>
              <tr>
                <th>Ciclo</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ciclo X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Ciclo X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Ciclo X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Ciclo X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Ciclo X</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Ciclo X</td>
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
