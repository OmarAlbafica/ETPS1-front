import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListaProveedores extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/inicio" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/proveedores/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nuevo Proveedor
          </Link>
          {" "}
        </div>
        <h3>Lista de Proveedores</h3>
        <div className="row">
          <table className=" striped">
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Estado</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Proveedor X</td>
                <td>Activo</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Proveedor X</td>
                <td>Activo</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Proveedor X</td>
                <td>Activo</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Proveedor X</td>
                <td>Activo</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Proveedor X</td>
                <td>Activo</td>
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
