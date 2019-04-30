import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/perfiles" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
        </div>
        <h3>Nuevo Perfil</h3>
        <div className="card">
          <div className="card-content">
            <div className="form-field">
              <label for="Nombre">
                <h5>Codigo: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Escuela">
                <h5>ID Beneficiario:</h5>
              </label>
              <a className='dropdown-trigger btn blue' href='#' data-target='dropdown1'>Beneficiario</a>

              <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
              </ul>
            </div>
            <div className="form-field">
              <label for="Escuela">
                <h5>ID Linea de Proyección:</h5>
              </label>
              <a className='dropdown-trigger btn blue' href='#' data-target='dropdown1'>Linea de Proyección</a>

              <ul id='dropdown2' className='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
              </ul>
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Fecha: </h5>
              </label>
              <input type="date" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Segundo Nombre: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>N Ciclo: </h5>
              </label>
              <input type="number" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Titulo: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Estudiantes Femeninos: </h5>
              </label>
              <input type="number" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Estudiantes Masculinos: </h5>
              </label>
              <input type="number" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Justificación</h5>
              </label>
              <textarea id="textarea1" className="materialize-textarea"></textarea>
            </div>
            <br />
            <div className="form-field">
              <button className="btn waves-effect waves-light blue" type="submit" name="action">Guardar
          </button>
              {" "}
              <button className="btn waves-effect waves-light red" type="submit" name="action">Cancelar
          </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
