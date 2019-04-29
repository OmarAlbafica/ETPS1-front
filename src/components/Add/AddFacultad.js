import React, { Component } from 'react'

export default class AddFacultad extends Component {
  render() {
    return (
        <div className="container" style={{marginTop: "20px", height: "70%"}}>
        <div className="row" style={{marginTop: "20px"}}>
          <h3>Nueva Facultad</h3>
          <form className="col s12">
                  <div className="row" style={{marginTop: "20px"}}>

          <div className='input-field col s6 offset-l2'>

           <i className="material-icons prefix">school</i>
           <input className='validate' type="text" name='Nfacultad' id='Nfacultad' required />
            <label for='Nfacultad'>Nombre Facultad</label> 
          </div>


        </div>
        <div className='row'>
            
           <div className="col s12 m4 l5 offset-l2"><a href="#" className="waves-effect  waves-light dark btn ">Ingresar</a></div> 
          <div className="col s12 m4 l5"><a href="#" className="waves-effect  waves-light dark btn ">Cancelar</a></div> 
          </div>
       </form>
      </div>
       </div>
    )
  }
}
