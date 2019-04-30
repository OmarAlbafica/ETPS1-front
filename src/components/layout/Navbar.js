import React, { Component } from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

export default class Navbar extends Component {

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    if (this.props.location.pathname === "/perfiles") {
      return (
        <div>
          <nav>
            <div className="nav-wrapper #ae193e pink darken-4" >
              <Link to="/inicio" className="brand-logo" style={{ paddingLeft: "15px" }}><i className="material-icons">home</i>Inicio</Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/lineas-produccion">Linea Proyección</Link></li>
                <li><Link to="/perfiles/beneficiarios">Beneficiarios</Link></li>
                <li><Link to="/perfiles/add">Nuevo Perfil</Link></li>
                <li><Link to="/perfiles/ciclos">Ciclos</Link></li>
                <li className="salir #000000 black"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/inicio"><i className="material-icons">home</i>Inicio</Link></li>
            <li><Link to="/lineas-produccion">Linea Proyección</Link></li>
            <li><Link to="/perfiles/beneficiarios">Beneficiarios</Link></li>
            <li><Link to="/perfiles/add">Nuevo Perfil</Link></li>
            <li><Link to="/perfiles/ciclos">Ciclos</Link></li>
            <li className="salir #000000 black"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
          </ul><span className="blue-text text-darken-2"></span>
        </div>
      )
    }
    if (this.props.location.pathname === "/perfiles/id") {
      return (
        <div>
          <nav>
            <div className="nav-wrapper #ae193e pink darken-4" >
              <Link to="/inicio" className="brand-logo" style={{ paddingLeft: "15px" }}><i className="material-icons">home</i>Inicio</Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/perfiles/id/asignaturas">Perfil Asignaturas</Link></li>
                <li><Link to="/perfiles/id/docentes">Perfil de Docente</Link></li>
                <li><Link to="/perfiles/id/objetivos">Objetivo del Perfil</Link></li>
                <li><Link to="/perfiles/id/actividades">Actividades</Link></li>
                <li><Link to="/perfiles/id/detalle-compra">Requerimiento Compras</Link></li>
                <li><Link to="/perfiles/id/organizaciones">Organizaciones Aliadas</Link></li>
                <li><Link to="/perfiles/id/actores-clave">Actores Clave</Link></li>
                <li className="salir #000000 black"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/inicio"><i className="material-icons">home</i>Inicio</Link></li>
            <li><Link to="/perfiles/id/asignaturas">Perfil Asignaturas</Link></li>
            <li><Link to="/perfiles/id/docentes">Perfil de Docente</Link></li>
            <li><Link to="/perfiles/id/objetivos">Objetivo del Perfil</Link></li>
            <li><Link to="/perfiles/id/actividades">Actividades</Link></li>
            <li><Link to="/perfiles/id/detalle-compra">Requerimiento Compras</Link></li>
            <li><Link to="/perfiles/id/organizaciones">Organizaciones Aliadas</Link></li>
            <li><Link to="/perfiles/id/actores-clave">Actores Clave</Link></li>
            <li className="salir #000000 black white-text"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
          </ul><span className="blue-text text-darken-2"></span>
        </div>
      )
    }
    if (this.props.location.pathname === "/usuarios") {
      return (
        <div>
          <nav>
            <div className="nav-wrapper #ae193e pink darken-4" >
              <Link to="/inicio" className="brand-logo" style={{ paddingLeft: "15px" }}><i className="material-icons">home</i>Inicio</Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/usuarios/add">Nuevo Usuario</Link></li>
                <li><Link to="/usuarios/personas">Lista Personas</Link></li>
                <li><Link to="/usuarios/roles">Roles</Link></li>
                <li className="salir #000000 black"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/inicio"><i className="material-icons">home</i>Inicio</Link></li>
            <li><Link to="/usuarios/add">Nuevo Usuario</Link></li>
            <li><Link to="/usuarios/personas">Lista Personas</Link></li>
            <li><Link to="/usuarios/roles">Roles</Link></li>
            <li className="salir #000000 black"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
          </ul><span className="blue-text text-darken-2"></span>
        </div>
      )
    }
    return (
      <div>
        <nav>
          <div className="nav-wrapper #ae193e pink darken-4" >
            <Link to="/inicio" className="brand-logo" style={{ paddingLeft: "15px" }}><i className="material-icons">home</i>Inicio</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/facultades">Facultades</Link></li>
              <li><Link to="/proveedores">Proveedores</Link></li>
              <li><Link to="/perfiles">Perfiles</Link></li>
              <li><Link to="/usuarios">Usuarios</Link></li>
              <li><Link to="/tipo-descripcion">Tipo Descripcion</Link></li>
              <li><Link to="/vehiculos">Vehiculos</Link></li>
              <li className="salir #000000 black"><Link to="/"><i className="material-icons right">power_settings_new</i>Salir</Link></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><Link to="/inicio"><i className="material-icons">home</i>Inicio</Link></li>
          <li><Link to="/facultades">Facultades</Link></li>
          <li><Link to="/proveedores">Proveedores</Link></li>
          <li><Link to="/perfiles">Perfil</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/tipo-descripcion">Tipo Descripcion</Link></li>
          <li><Link to="/vehiculos">Vehiculos</Link></li>
          <li className="salir #000000 black"><Link to="/"><span className="white-text "><i className="material-icons right center">power_settings_new</i>Salir</span></Link></li>
        </ul><span className="blue-text text-darken-2"></span>
      </div>
    )
  }
}
