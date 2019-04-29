import React, { Component } from 'react';
import Button from "./forms/Button";
import Input from "./forms/Input";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      password: ""
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  obSubmit = e => {
    e.preventDefault();
    // const { usuario, password } = this.state;

  }

  render() {
    return (

      <div className="#ae193e pink darken-4">
        <center>
          <div className="container">
            <div className="white-text text-black-2" style={{ display: "inlineBlock", padding: "0% 20% 0% 20%", border: "1%" }}>

              <div className='row'>
                <div className='input-field col m12'>
                  <h1>Sistema de Proyeccion Social</h1>
                  <h3>Iniciar Sesion</h3>
                  <i className="large material-icons">person</i>
                </div>
              </div>




              <div className='row'>
                <form className="col s12">
                  <div className="row">
                    <Input
                      icon="account_circle"
                      type="text"
                      name="usuario"
                      label="Usuario"
                      extraClass="white-text"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='row'>
                    <Input
                      icon="lock"
                      type="password"
                      name="password"
                      label="Clave"
                      extraClass="white-text"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <center>
                    <Button
                      action={this.onSubmit}
                      color="blue"
                      text="Ingresar"
                    />
                  </center>
                </form>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </center>
      </div>
    )
  }
}
