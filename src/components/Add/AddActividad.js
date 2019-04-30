import React, { Component } from 'react';
import Select from "react-select";

export default class AddActividad extends Component {

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
        <h3>Nueva Actividad</h3>
        <div className="row ">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="Docente"><h5>Ciclo:</h5></label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </div>
                <div className="form-field">
                  <label for="Docente"><h5>Nombre:</h5></label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label for="Docente"><h5>N° Visitas:</h5></label>
                  <input type="number" />
                </div>
                <div className="form-field">
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Guardar
                    <i className="material-icons right">send</i>
                  </button>
                  {" "}
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
