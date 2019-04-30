import React, { Component } from 'react';
import Input from "../forms/Input";
import { Link } from "react-router-dom";

export default class ListaGuiaTrabajo extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="form-field">
          <br />
          <Link to="/perfiles/id" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/perfiles/id/guias-trabajo/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nueva Guia de trabajo
          </Link>
        </div>
        <h3 style={{ marginBottom: "50px" }}>Listado de Guias de Trabajo</h3>
        <Input
          icon="account_circle"
          type="text"
          name="buscar"
          label="Buscar"
          onChange={this.onChange}
        />
        <table className="responsive-table striped" >
          <thead>
            <tr>
              <th>Lugar</th>
              <th>Fecha</th>
              <th>Hora de Inicio</th>
              <th>Hora Final</th>
              <th>Tema</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jardin Botanico</td>
              <td>2019-04-15</td>
              <td>08:00</td>
              <td>10:00</td>
              <td>Flora y fauna</td>

              <td><Link to="/perfiles/id/guias-trabajo/id/contenido/add" class="waves-effect blue-grey darken-1 waves-light btn">Agregar Contenido</Link></td>
              <td><Link to="/vehiculos/add" class="waves-effect blue-grey lighten-2 waves-light btn">Vehiculo</Link></td>
              <td><Link to="/perfiles/id/guias-trabajo/id/seguimientos" class="waves-effect grey waves-light btn">Seguimiento</Link></td>
              <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
              <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
            </tr>

          </tbody>
        </table>
        <br />
      </div>
    )
  }
}
