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
import AddUsuarios from "./components/Add/AddUsuarios";
import AddLineaProduccion from "./components/Add/AddLineaProyeccion";
import ListaProyeccion from "./components/Listas/ListaProyeccion";
import ListaCiclos from "./components/Listas/ListaCiclos";
import ListaProveedores from "./components/Listas/ListaProveedores";
import ListaBeneficiarios from "./components/Listas/ListaBeneficiario";
import AddBeneficiario from "./components/Add/AddBeneficiario";
import AddCiclo from "./components/Add/AddCiclos";
import AddPerfil from "./components/Add/AddPerfil";
import AddPerfilDocente from "./components/Add/AddPerfilDocente";
import AddObjetivoPerfil from "./components/Add/AddObjetivoPerfil";
import AddActividad from "./components/Add/AddActividad";
import AddProveedor from "./components/Add/AddProveedor";
import DetalleCompra from "./components/DetalleCompra";
import AddGuiaTrabajo from "./components/Add/AddGuiaTrabajo";
import AddTipoDescripcion from "./components/Add/AddTipoDescripcion";
import AddContenidoGuiaTrabajo from "./components/Add/AddContenidoGuiaTrabajo";
import AddVehiculos from "./components/Add/AddVehiculos";
import AddRequerimientosTransporte from "./components/Add/AddRequerimientosTransporte";
import AddSeguimiento from "./components/Add/AddSeguimiento";
import AddOrganizacion from "./components/Add/AddOrganizacion";
import AddActoresClave from "./components/Add/AddActoresClave";
import ListaTipoDescripcion from "./components/Listas/ListaTipoDescripcion";
import Inicio from "./components/Inicio";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100vh" }}>
          <Route path="/" component={Navbar} />
          <Route path="/" exact component={Login} />
          <Route path="/inicio" exact component={Inicio} />
          <Route path="/facultades" exact component={Facultades} />
          <Route path="/facultades/add" exact component={AddFacultad} />
          <Route path="/facultades/id/escuelas" exact component={Escuelas} />
          <Route path="/facultades/id/escuelas/add" exact component={AddEscuela} />
          <Route path="/facultades/id/escuelas/id/asignaturas" exact component={ListaAsignaturas} />
          <Route path="/facultades/id/escuelas/id/asignaturas/add" exact component={AddAsignatura} />
          <Route path="/usuarios" exact component={ListaUsuarios} />
          <Route path="/usuarios/add" exact component={AddUsuarios} />
          <Route path="/usuarios/personas" exact component={ListaPersonas} />
          <Route path="/usuarios/personas/add" exact component={AddPersona} />
          <Route path="/usuarios/roles" exact component={ListaRoles} />
          <Route path="/usuarios/roles/add" exact component={AddRol} />
          <Route path="/lineas-produccion" exact component={ListaProyeccion} />
          <Route path="/lineas-produccion/add" exact component={AddLineaProduccion} />
          <Route path="/proveedores" exact component={ListaProveedores} />
          <Route path="/proveedores/add" exact component={AddProveedor} />

          <Route path="/perfiles" exact component={ListaPerfiles} />
          <Route path="/perfiles/add" exact component={AddPerfil} />
          <Route path="/perfiles/ciclos" exact component={ListaCiclos} />
          <Route path="/perfiles/ciclos/add" exact component={AddCiclo} />
          <Route path="/perfiles/beneficiarios" exact component={ListaBeneficiarios} />
          <Route path="/perfiles/beneficiarios/add" exact component={AddBeneficiario} />
          <Route path="/perfiles/id" exact component={VerPerfil} />
          <Route path="/perfiles/id/asignaturas" exact component={ListaAsignaturas} />
          <Route path="/perfiles/id/asignaturas/add" exact component={AddAsignatura} />
          <Route path="/perfiles/id/docentes" exact component={AddPerfilDocente} />
          <Route path="/perfiles/id/objetivos" exact component={AddObjetivoPerfil} />
          <Route path="/perfiles/id/actividades" exact component={AddActividad} />
          <Route path="/perfiles/id/detalle-compra" exact component={DetalleCompra} />
          <Route path="/perfiles/id/organizaciones" exact component={AddOrganizacion} />
          <Route path="/perfiles/id/actores-clave" exact component={AddActoresClave} />
          <Route path="/perfiles/id/guias-trabajo" exact component={GuiasDeTrabajo} />
          <Route path="/perfiles/id/guias-trabajo/add" exact component={AddGuiaTrabajo} />
          <Route path="/perfiles/id/guias-trabajo/id/contenido/add" exact component={AddContenidoGuiaTrabajo} />
          <Route path="/perfiles/id/guias-trabajo/id/seguimientos" exact component={ListaSeguimiento} />
          <Route path="/perfiles/id/guias-trabajo/id/seguimientos/add" exact component={AddSeguimiento} />
          <Route path="/perfiles/id/guias-trabajo/id/transporte/add" exact component={AddRequerimientosTransporte} />

          <Route path="/tipo-descripcion" exact component={ListaTipoDescripcion} />
          <Route path="/tipo-descripcion/add" exact component={AddTipoDescripcion} />

          <Route path="/vehiculos" exact component={ListaVehiculos} />
          <Route path="/vehiculos/add" exact component={AddVehiculos} />

          <br />
          <Footer />
        </div>
      </Router>
    )
  }
}
