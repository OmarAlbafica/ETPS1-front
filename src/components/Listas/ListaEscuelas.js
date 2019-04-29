import React, { Component } from 'react';
import Input from "../forms/Input";


export default class ListaEscuelas extends Component {
  render() {
    return (
        <div className="container" style={{paddingTop: "50px"}}>
				<h3 style={{marginBottom: "50px"}}>Listado de Escuelas</h3>
        <Input
            icon="account_circle"
            type="text"
            name="buscar"
            label="Buscar"
            onChange={this.onChange} 
        />
        <div class="row" style={{paddingTop: "50px"}} >
         
           <table class="responsive-table striped" style={{paddingTop: "50px"}} >
             <thead>
               <tr>
                  
                   <th>Escuelas</th>
                   <th>Asignatura</th>
                   <th>Personas</th>
                   <th></th>
                   <th></th>
     
               </tr>
             </thead>
     
             <tbody>
             <tr>
           <td>Escuela de ciencias aplicadas</td>
             <td><a href="#" class="waves-effect blue-grey lighten-2 waves-light btn">Ver Asignaturas</a></td>
             <td><a href="#" class="waves-effect grey waves-light btn">Ver Personas</a></td>
             <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
             <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
               </tr>
             <tr>
           <td>Escuela de ciencias aplicadas</td>
             <td><a href="#" class="waves-effect blue-grey lighten-2 waves-light btn">Ver Asignaturas</a></td>
             <td><a href="#" class="waves-effect grey waves-light btn">Ver Personas</a></td>
             <td><a href="#" class="waves-effect blue waves-light btn">Editar</a></td>
             <td><a href="#" class="waves-effect red waves-light btn">Eliminar</a></td>
               </tr>
     
          
             </tbody>
           </table>
           </div>
        </div>
    )
  }
}
