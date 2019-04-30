import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class AddGuiaTrabajo extends Component {
  render() {
    return (
      <div className="container">
        <h3>Nueva Guia</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="Lug"><h5>Lugar: </h5></label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label for="fecha"><h5>Fecha: </h5></label>
                  <input type="date" name="fecha1" id="fecha1" />
                </div>
                <div className="form-field">
                  <label for="horai"><h5>Hora Inicio: </h5></label>
                  <input type="time" name="hora1" id="hora1" />
                </div>
                <div className="form-field">
                  <label for="horaf"><h5>Hora Final: </h5></label>
                  <input type="time" name="hora2" id="hora2" />
                </div>
                <div className="form-field">
                  <label for="Tema"><h5>Tema: </h5></label>
                  <input type="text" />
                </div>
                <div className="form-field">
                <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Guardar
                <i className="material-icons right">send</i>
                  </button>
                  <button  className="btn waves-effect waves-light pink darken-4" type="submit" name="action" ><Link to="/perfiles/id">Cancelar</Link>
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
