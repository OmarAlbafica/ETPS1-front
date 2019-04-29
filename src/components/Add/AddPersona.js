import React, { Component } from 'react'

export default class AddPersona extends Component {
  render() {
    return (
      <div class="container">
        <h3>Añadir Persona</h3>
        <div class="card">
          <div class="card-content">
            <div class="form-field">
              <label for="Nombre">
                <h5>Codigo: </h5>
              </label>
              <h4 class="green-text">8274938</h4>
            </div>
            <div class="form-field">
              <label for="Escuela">
                <h5>Escuela</h5>
              </label>
              <a class='dropdown-trigger btn blue' href='#' data-target='dropdown1'>Seleccionar Escuela</a>

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
