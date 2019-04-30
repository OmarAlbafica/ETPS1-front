import React, { Component } from 'react'

export default class AddCiclos extends Component {
  render() {
    return (
      <div className="container">
        <h3>Añadir Ciclo</h3>
        <div className="row">
          <form className="col s12">
            <div className="row">

              <div className='input-field col s12'>

                <i className="material-icons prefix">school</i>
                <input className='validate' type="text" name='Nfacultad' id='Nfacultad' required />
                <label for='Nfacultad'>Nombre del Ciclo</label>
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
