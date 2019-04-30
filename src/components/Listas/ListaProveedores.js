import React, { Component } from 'react'

export default class ListaProveedores extends Component {
  render() {
    return (
      <div className="container">
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
