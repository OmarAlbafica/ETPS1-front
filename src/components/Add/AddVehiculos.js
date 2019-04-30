import React, { Component } from 'react'

export default class AddVehiculos extends Component {
  render() {
    return (
      <div className="container">
        <h3>Nuevo Vehiculo</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="NombreV"><h6>Nombre del Vehiculo:</h6></label>
                </div>
                <div className="form-field">
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label for="PrecioV" ><h6>Precio: </h6></label>
                </div>
                <div className="form-field">
                  <input type="text" />
                </div>
                <div className="from-field">
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
