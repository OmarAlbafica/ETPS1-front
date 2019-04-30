import React, { Component } from 'react'
import Select from "react-select";

export default class AddRequerimientosTransporte extends Component {

  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }


  render() {
    const { selectedOption } = this.state;

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

    return (
      <div className="container">
        <h3>Nuevo Requerimiento Transporte</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row white z-depth-2">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="vehi"><h5>Vehiculo: </h5></label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </div>
                <div className="form-field">
                  <label for="salida"><h5>N° Salida: </h5></label>
                  <input type="number" name="nsalida" id="nsalida" value="3" />
                </div>
                <div className="form-field">
                  <label for="personas"><h5>N° Personas: </h5></label>
                  <input type="number" name="npersonas" id="nsalida" value="10" />
                </div>
                <div className="form-field">
                  <label for="direccion"><h5>Direccion: </h5></label>
                  <textarea name="direccionU" id="direccionU" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                  <label for="fecha"><h5>Fecha: </h5></label>
                  <input type="date" name="" id="" />
                </div>
                <div className="form-field">
                  <label for="horai"><h5>Hora Inicio: </h5></label>
                  <input type="time" name="hora1" id="hora1" />
                </div>
                <div className="form-field">
                  <label for="horaf"><h5>Hora Fin: </h5></label>
                  <input type="time" name="hora2" id="hora2" />
                </div><br />
                <div className="form-field">
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Guardar
                    <i className="material-icons right">send</i>
                  </button>
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Cancelar
                    <i className="material-icons right">cancel</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
