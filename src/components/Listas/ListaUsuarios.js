import React, { Component } from 'react'
import Input from "../forms/Input";
import { Link } from 'react-router-dom'


export default class ListaUsuarios extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/inicio" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/usuarios/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nuevo usuario
          </Link>
        </div>
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
                <td ><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario1</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario2</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario3</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario4</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario5</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario6</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario7</td>
                <td>Usuario</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Usuario8</td>
                <td>Usuario</td>
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
