import React, { Component } from 'react'
import Input from "../forms/Input";

export default class ListaPersonas extends Component {
  render() {
    return (
      <div className="container">
        <h3>Linea de proyección</h3>
        <div className="row">
          <br />
          <Input
            icon="account_circle"
            type="text"
            name="buscar"
            label="Buscar"
            onChange={this.onChange}
          />
          <br />
          <table className="responsive-table striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Segundo Nombre</th>
                <th>Apellido</th>
                <th>Segundo Apellido</th>
                <th>Escuela</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Genero</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Jorge</td>
                <td>Alberto</td>
                <td>Castillo</td>
                <td>Lopez</td>
                <td>Informatica</td>
                <td>943923948</td>
                <td>correo@mail.com</td>
                <td>Masculino</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Jorge</td>
                <td>Alberto</td>
                <td>Castillo</td>
                <td>Lopez</td>
                <td>Informatica</td>
                <td>943923948</td>
                <td>correo@mail.com</td>
                <td>Masculino</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Jorge</td>
                <td>Alberto</td>
                <td>Castillo</td>
                <td>Lopez</td>
                <td>Informatica</td>
                <td>943923948</td>
                <td>correo@mail.com</td>
                <td>Masculino</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Jorge</td>
                <td>Alberto</td>
                <td>Castillo</td>
                <td>Lopez</td>
                <td>Informatica</td>
                <td>943923948</td>
                <td>correo@mail.com</td>
                <td>Masculino</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Jorge</td>
                <td>Alberto</td>
                <td>Castillo</td>
                <td>Lopez</td>
                <td>Informatica</td>
                <td>943923948</td>
                <td>correo@mail.com</td>
                <td>Masculino</td>
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
