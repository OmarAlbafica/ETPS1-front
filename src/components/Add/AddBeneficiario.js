import React, { Component } from 'react'

export default class AddBeneficiario extends Component {
  render() {
    return (
      <div className="container">
        <h3>Beneficiarios</h3>
        <div className="card">
          <div className="card-content">
            <div className="form-field">
              <label for="Nombre">
                <h5>Nombre del Representante: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Telefono del Representante: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Correo Electronico: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Institución: </h5>
              </label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Descripción: </h5>
              </label>
              <textarea id="textarea1" className="materialize-textarea"></textarea>
            </div>
            <div className="form-field">
              <label for="Nombre">
                <h5>Cantidad: </h5>
              </label>
              <div className="row">
                <div className="col s2">
                  <input type="number" />
                </div>
              </div>
            </div>
            <br />
            <div className="form-field">
              <button className="btn waves-effect waves-light blue" type="submit" name="action">Guardar
          </button>
              <button className="btn waves-effect waves-light red" type="submit" name="action">Cancelar
          </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
