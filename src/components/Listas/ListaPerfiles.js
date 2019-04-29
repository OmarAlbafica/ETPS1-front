import React, { Component } from 'react';
import Input from "../forms/Input";

export default class ListaPerfile extends Component {
  render() {
    return (
      <div className="container" style={{paddingTop: "50px"}}>
				<h3 style={{marginBottom: "50px"}}>Listado de Perfiles</h3>
        <Input
					icon="account_circle"
					type="text"
					name="buscar"
					label="Buscar"
					onChange={this.onChange} 
        />
        <table style={{marginTop: "20px"}} className="responsive-table striped" >
        <thead>
          <tr>
             
              <th>Beneficiarios</th>
              <th>Linea de proyeccion</th>
              <th>Fecha</th>
              <th>Ciclo</th>
              <th>Titulo</th>
              <th></th>
              <th></th>
              <th></th>
          </tr>
        </thead>

        <tbody>
        <tr>
        <td>Centro escolar</td>
        <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</td>
        <td>20-20-20</td>
        <td>01-2016</td>
        <td>ARRIENDAMIENTO DE SISTEMAS DE PRODUCCION</td>
        <td ><a href="#" className="waves-effect grey waves-light btn">Ver&nbspPerfil</a></td>
        <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>
        <tr>
        <td>Centro escolar</td>
        <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</td>
        <td>20-20-20</td>
        <td>01-2016</td>
        <td>ARRIENDAMIENTO DE EQUIPO</td>
        <td ><a href="#" className="waves-effect grey waves-light btn">Ver&nbspPerfil</a></td>
        <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>
                <tr>
        <td>Centro escolar</td>
        <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</td>
        <td>20-20-20</td>
        <td>01-2016</td>
        <td>ARRIENDAMIENTO DE SISTEMAS DE PRODUCCION</td>
        <td ><a href="#" className="waves-effect grey waves-light btn">Ver&nbspPerfil</a></td>
        <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>
        <tr>
        <td>Centro escolar</td>
        <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</td>
        <td>20-20-20</td>
        <td>01-2016</td>
        <td>ARRIENDAMIENTO DE EQUIPO</td>
        <td ><a href="#" className="waves-effect grey waves-light btn">Ver&nbspPerfil</a></td>
        <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
        <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
        </tr>     
        </tbody>
      </table>
      </div>
    )
  }
}
