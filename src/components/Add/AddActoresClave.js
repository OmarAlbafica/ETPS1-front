import React, { Component } from 'react'

export default class AddActoresClave extends Component {
  render() {
    return (
      <div className="container">
        <h3>Nuevos Actores Clave</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-feild">
                  <label for="nom"><h5>Nombre: </h5></label>
                  <input type="text" />
                </div>
                <div className="form-feild">
                  <label for="tel"><h5>Telefono: </h5></label>
                  <input type="text" />
                </div>
                <div className="form-feild">
                  <label for="corr"><h5>Correo: </h5></label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-feild">
                  <label for="desc"><h5>Descripcion: </h5></label>
                  <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
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
