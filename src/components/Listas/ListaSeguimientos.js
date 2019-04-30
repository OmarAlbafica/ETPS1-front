import React, { Component } from 'react'
import Input from "../forms/Input";
import { Link } from 'react-router-dom'


export default class ListaSeguimientos extends Component {
  render() {
    return (
      <div class="container">
        <div className="form-field">
          <br />
          <Link to="/perfiles/id/guias-trabajo" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          {" "}
          <Link to="/perfiles/id/guias-trabajo/id/seguimientos/add" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">add_circle_outline</i>Nuevo seguimiento
          </Link>
        </div>
        <div class="row" >
          <h2>Jardin Botanico</h2>
          <br />
          <Input
            icon="account_circle"
            type="text"
            name="buscar"
            label="Buscar"
            onChange={this.onChange}
          />
          <br />
          <table class="responsive-table striped" >
            <thead>
              <tr>
                <th>N° De Estudiantes</th>
                <th>N° De Beneficiarios</th>
                <th>Descripcion</th>
                <th>Docente</th>
                <th>Evidencia</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>25</td>
                <td>10</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.,</td>
                <td>Docente 1</td>
                <td>RUTA DE ARCHIVO</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>


              <tr>
                <td>25</td>
                <td>10</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.,</td>
                <td>Docente 1</td>
                <td >Ruta de archivo</td>
                <td ><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>


              <tr>
                <td>25</td>
                <td>10</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.,</td>
                <td>Docente 1</td>
                <td >Ruta de archivo</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>

              <tr>
                <td>25</td>
                <td>10</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.,</td>
                <td>Docente 1</td>
                <td >Ruta de archivo</td>
                <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>

              <tr>
                <td>25</td>
                <td>10</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.,</td>
                <td>Docente 1</td>
                <td >Ruta de archivo</td>
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
