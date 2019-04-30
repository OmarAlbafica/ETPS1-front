import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddUsuarios extends Component {
  render() {
    return (
      <div class="container">
        <div className="form-field">
          <br />
          <Link to="/usuarios" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
        </div>
        <h3>Añadir Usuario</h3>
        <div class="card">
          <div class="card-content">
            <div class="form-field">
              <label for="Escuela">
                <h5>Rol:</h5>
              </label>
              <a class='dropdown-trigger btn blue' href='#' data-target='dropdown1'>Seleccionar Rol</a>

              <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
              </ul>
            </div>
            <div class="form-field">
              <label for="Nombre">
                <h5>Nombre: </h5>
              </label>
              <input type="text" />
            </div>
            <div class="form-field">
              <label for="Nombre">
                <h5>Segundo Nombre: </h5>
              </label>
              <input type="text" />
            </div>
            <div class="form-field">
              <label for="Nombre">
                <h5>Apellido: </h5>
              </label>
              <input type="text" />
            </div>
            <div class="form-field">
              <label for="Nombre">
                <h5>Segundo Apellido: </h5>
              </label>
              <input type="text" />
            </div>
            <div class="form-field">
              <label for="Nombre">
                <h5>Telefono: </h5>
              </label>
              <input type="text" />
            </div>
            <div class="form-field">
              <label for="Nombre">
                <h5>Correo Electronico: </h5>
              </label>
              <input type="text" />
            </div>
            <div class="form-field">
              <label>
                <h5>Genero:</h5>
              </label>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Femenino</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>Masculino</span>
                </label>
              </p>
            </div>
            <br />
            <div class="form-field">
              <button class="btn waves-effect waves-light blue" type="submit" name="action">Guardar
          </button>
              <button class="btn waves-effect waves-light red" type="submit" name="action">Cancelar
          </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
