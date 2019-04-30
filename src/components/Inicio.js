import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Inicio extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "2%" }} >

        <div className="row">
          <div className="col 12">
            <div className="center promo promo-example">


              <div className="card hoverable large">
                <div className="card-image">
                  <img src="https://www.utec.edu.sv/images/slide_ps.jpg" />
                  <span className="card-title black-text"> <b>Universidad Tecnologica de El Salvador</b> </span>
                </div>
                <div className="card-content">
                  <p><b>La responsabilidad social, siempre presente en la Utec</b><br />
                    A lo largo de estos 34 años, el modelo de proyección social de la Universidad Tecnológica de El Salvador, se ha integrado al proceso de enseñanza y la investigación, mediante la realización de proyectos y actividades que conllevan a la interacción responsable y ética entre universidad, comunidad universitaria y sociedad, contribuyendo a la transformación social, aportando desde su quehacer conocimientos, habilidades, actitudes y propuestas de solución a las necesidades de la población, principalmente la más desprotegida y vulnerable.
                  </p>
                </div>
                <div className="card-action">
                  <a href="https://www.utec.edu.sv/Inicio/Proyeccion-Social/Home" >Leer mas</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="divider"></div>
          <div className="col s4" style={{ marginTop: "2%" }} >
            <div className="center promo promo-example">
              <div className="card">
                <div className="card-image">
                  <i style={{ marginTop: "4%", color: "#481121" }} className="large material-icons">directions_bus</i>
                  <Link to="/vehiculos/add" className="btn-floating btn-large halfway-fab waves-effect waves-light pink darken-3"><i className="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <span className="card-title pink-text">Transportes</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>



          <div className="col s4" style={{ marginTop: "2%" }} >
            <div className="center promo promo-example">
              <div className="card">
                <div className="card-image">
                  <i style={{ marginTop: "4%", color: "#481121" }} className="large material-icons">receipt</i>
                  <Link to="/perfiles" className="btn-floating btn-large halfway-fab waves-effect waves-light pink darken-3"><i className="material-icons">link</i></Link>
                </div>
                <div className="card-content">
                  <span className="card-title pink-text">Perfiles de proyeccion</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="col s4" style={{ marginTop: "2%" }} >
            <div className="center promo promo-example">
              <div className="card">
                <div className="card-image">
                  <i style={{ marginTop: "4%", color: "#481121" }} className="large material-icons icon-pink darken-4">people_outline</i>
                  <Link to="/proveedores/add" className="btn-floating btn-large halfway-fab waves-effect waves-light pink darken-3"><i className="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <span className="card-title pink-text">Proveedores</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
