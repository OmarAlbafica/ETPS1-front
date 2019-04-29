import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #ae193e pink darken-4">
            <Link to="/inicio" className="brand-logo"><i className="material-icons">home</i>Inicio</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="facultades.html">Facultades</a></li>
              <li><a href="proveedores.html">Proveedores</a></li>
              <li><a href="perfil.html">Perfil</a></li>
              <li><a href="usuarios.html">Usuarios</a></li>
              <li><a href="tipodescripcion.html">Tipo Descripcion</a></li>
              <li><a href="vehiculos.html">Vehiculos</a></li>
              <li className="salir #000000 black"><a href="index.html"><i className="material-icons right">power_settings_new</i>Salir</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="inicio.html"><i className="material-icons">home</i>Inicio</a></li>
          <li><a href="facultades.html">Facultades</a></li>
          <li><a href="proveedores.html">Proveedores</a></li>
          <li><a href="perfil.html">Perfil</a></li>
          <li><a href="usuarios.html">Usuarios</a></li>
          <li><a href="tipodescripcion.html">Tipo Descripcion</a></li>
          <li><a href="vehiculos.html">Vehiculos</a></li>
          <li className="salir #000000 black"><a href="index.html"><span className="white-text "><i className="material-icons right center">power_settings_new</i>Salir</span></a></li>
        </ul>
      </div>
    )
  }
}
