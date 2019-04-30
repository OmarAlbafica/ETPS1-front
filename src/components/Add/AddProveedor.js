import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddProveedor extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/proveedores" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
        </div>
        <h3>Nuevo Proveedor</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="Docente"><h5>Nombre Proveedor:</h5></label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label for="Confirmacio"><h5>Estado</h5></label>
                  <p>
                    <label>
                      <input name="group1" type="radio" checked />
                      <span>Activo</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name="group1" type="radio" />
                      <span>Inactivo</span>
                    </label>
                  </p>
                </div>
                <br />
                <div className="form-field">
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Guardar
                    <i className="material-icons right">send</i>
                  </button>
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Cancelar
                    <i className="material-icons right">cancel</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
