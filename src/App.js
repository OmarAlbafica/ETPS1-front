import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Login from "./components/Login";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ListaPerfiles from "./components/Listas/ListaPerfiles";
import VerPerfil from "./components/Perfiles/VerPerfil";
import AddFacultad from "./components/Add/AddFacultad";
import AddAsignatura from "./components/Add/AddAsignatura";
import Facultades from "./components/Listas/ListaFacultades";
import Escuelas from "./components/Listas/ListaEscuelas";
import GuiasDeTrabajo from "./components/Listas/ListaGuiaTrabajo";
import ListaSeguimiento from "./components/Listas/ListaSeguimientos";
import ListaAsignaturas from "./components/Listas/ListaAsignaturas";
import ListaUsuarios from "./components/Listas/ListaUsuarios";
import ListaRoles from "./components/Listas/ListaRol";
import ListaVehiculos from "./components/Listas/ListaVehiculos";
import ListaPersonas from "./components/Listas/ListaPersonas";
import AddEscuela from "./components/Add/AddEscuela";
import AddRol from "./components/Add/AddRol";
import AddPersona from "./components/Add/AddPersona";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100vh" }}>
          <Navbar />
          <Route path="/" exact component={Login} />
          <Route path="/inicio" exact component={Login} />
          <Route path="/perfiles" exact component={ListaPerfiles} />
          <Route path="/perfiles/id" exact component={VerPerfil} />
          <Route path="/facultades/add" exact component={AddFacultad} />
          <Route path="/asignaturas/add" exact component={AddAsignatura} />
          <Route path="/facultades" exact component={Facultades} />
          <Route path="/escuelas" exact component={Escuelas} />
          <Route path="/escuelas/add" exact component={AddEscuela} />
          <Route path="/guiastrabajo" exact component={GuiasDeTrabajo} />
          <Route path="/seguimientos" exact component={ListaSeguimiento} />
          <Route path="/asignaturas" exact component={ListaAsignaturas} />
          <Route path="/usuarios" exact component={ListaUsuarios} />
          <Route path="/roles" exact component={ListaRoles} />
          <Route path="/vehiculos" exact component={ListaVehiculos} />
          <Route path="/personas" exact component={ListaPersonas} />
          <Route path="/roles/add" exact component={AddRol} />
          <Route path="/personas/add" exact component={AddPersona} />

          <br />
          <Footer />
        </div>
      </Router>
    )
  }
}
