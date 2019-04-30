import React, { Component } from 'react'

export default class AddObjetivoPerfil extends Component {
  render() {
    return (
      <div className="container">
        <h3>Objetivos del Perfil</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="Docente"><h5>Contenido:</h5></label>
                  <textarea name="Contenid" id="Contenido" cols="30" rows="10">
                  </textarea>
                </div>
                <br />
                <div className="form-field">
                  <label for="Confirmacio"><h5>Objetivo General:</h5></label>
                  <p>
                    <label>
                      <input name="group1" type="radio" checked />
                      <span>Si</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name="group1" type="radio" />
                      <span>No</span>
                    </label>
                  </p>
                </div>
                <br /><br />
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
