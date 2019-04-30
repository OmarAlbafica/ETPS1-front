import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class AddAsignatura extends Component {


	render() {
		return (
			<div style={{ marginTop: "20px", height: "70%" }}>
				<div class="container" style={{ marginTop: "20px" }}>
					<div className="form-field">
						<br />
						<Link to="/facultades/id/escuelas" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
					</div>
					<h3>Nueva Asignatura</h3>
					<div class="row" style={{ marginTop: "20px" }}>
						<form class="col s12">
							<div class="row" >
								<div className='input-field col s6 offset-l2'>

									<i className="material-icons prefix">school</i>
									<input className='validate' type="text" name='Nfacultad' id='Nfacultad' required />
									<label for='Nfacultad'>Nombre Asignatura</label>
								</div>
							</div>
						</form>
					</div>
					<div class='row'>
						<div class="col s12 m4 l5 offset-l2"><a href="#" class="waves-effect  waves-light dark btn ">Ingresar</a></div>
						<div class="col s12 m4 l5"><a href="#" class="waves-effect  waves-light dark btn ">Cancelar</a></div>
					</div>
				</div>
			</div>

		)
	}
}
