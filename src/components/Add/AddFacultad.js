import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from "../forms/Button";
import Input from "../forms/Input";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default class AddFacultad extends Component {
   constructor(props) {
    super(props);
    this.state = {
      Nfacultad: ""
    }
  }

  onChange = e => this.setState({ [e.target.Nfacultad]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { Nfacultad} = this.state;
    if (Nfacultad === "") {
      toast.error("Digite el nombre de la nueva facultad", { autoClose: 3000,  });
    } else {
      toast.error("Realizado", { autoClose: 3000,  });
   
  }}

  render() {
        toast.configure();
    return (
      <div className="container" style={{ marginTop: "20px", height: "70%" }}>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="form-field">
            <br />
            <Link to="/facultades" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
          </div>
          <h3>Nueva Facultad</h3>
          <form className="col s12">
            <div className="row" style={{ marginTop: "20px" }}>

              <div className='input-field col s6 offset-l2'>

                <i className="material-icons prefix">school</i>
                <input className='validate' type="text" name='Nfacultad' id='Nfacultad' required />
                <label for='Nfacultad'>Nombre Facultad</label>
              </div>


            </div>
            <div className='row'>
              <div className="col s12 m4 l5 offset-l2"><Button action={this.onSubmit} Link to="/facultades" className="waves-effect  waves-light dark btn "text="Ingresar" /></div>
              <div className="col s12 m4 l5"><Link to="/facultades" className="waves-effect  waves-light dark btn ">Cancelar</Link></div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
