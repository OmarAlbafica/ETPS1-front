import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ListaPerfiles from "./components/Listas/ListaPerfiles";
import VerPerfil from "./components/Perfiles/VerPerfil";
import AddFacultad from "./components/Add/AddFacultad";
import AddAsignatura from "./components/Add/AddAsignatura";
import Facultades from "./components/Listas/ListaFacultades";
import Escuelas from "./components/Listas/ListaEscuelas";
// Components
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height: "100vh"}}>
          <Navbar />
          <Route path="/" exact component={Login} />
          <Route path="/perfiles" exact component={ListaPerfiles} />
          <Route path="/perfiles/id" exact component={VerPerfil} />
          <Route path="/facultades/add" exact component={AddFacultad} />
          <Route path="/asignaturas/add" exact component={AddAsignatura} />
          <Route path="/facultades" exact component={Facultades} />
          <Route pATH="/escuelas" exact component={Escuelas}/>
          <br/>
          <Footer />
        </div>
      </Router>
    )
  }
}
