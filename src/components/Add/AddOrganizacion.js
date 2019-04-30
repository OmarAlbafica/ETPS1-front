import React, { Component } from 'react'

export default class AddOrganizacion extends Component {
  render() {
    return (
      <div className="container">
        <h3>Nueva Organizacion Aliada</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="NomO"><h5>Nombre Organizacion: </h5></label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label for="NomO"><h5>Descripcion: </h5></label>
                  <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                </div><br />
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
