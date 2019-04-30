import React, { Component } from 'react'
import Input from "../forms/Input";
import { Link } from 'react-router-dom'


export default class ListaVehiculos extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/inicio" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/vehiculos/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nuevo vehiculo
          </Link>
        </div>
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
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Pickut</td>
                <td>$10.00</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Microbus</td>
                <td>$25.00</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Pickut</td>
                <td>$10.00</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Microbus</td>
                <td>$25.00</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Pickut</td>
                <td>$10.00</td>
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
