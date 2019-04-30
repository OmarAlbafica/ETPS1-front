import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddEscuela extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/facultades/id/escuelas" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
        </div>
        <h3>Añadir Escuela</h3>
        <div className="row">
          <form className="col s12">
            <div className="row">

              <div className='input-field col s12'>

                <i className="material-icons prefix">school</i>
                <input className='validate' type="text" name='Nfacultad' id='Nfacultad' required />
                <label for='Nfacultad'>Nombre de Escuela</label>
              </div>


            </div>
            <div className='row'>

              <div className="col s12 m4 l5"><a className="waves-effect  waves-light dark btn ">Ingresar</a></div>
              <div className="col s12 m4 l5"><a className="waves-effect  waves-light dark btn ">Cancelar</a></div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
