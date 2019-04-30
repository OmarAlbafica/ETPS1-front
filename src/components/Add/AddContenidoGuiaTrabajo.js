import React, { Component } from 'react';
import Select from "react-select";

export default class AddContenidoGuiaTrabajo extends Component {

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
      <div class="container">
        <h3>Contenido de Guia de Trabajo</h3>
        <div class="row">
          <div class="col s12 m12 l12">
          </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="card">
              <div class="card-content">
                <div class="form-field">
                  <label for="Act"><h5>Actividad: </h5></label>
                  <div class="input-filed">
                    <Select
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    />
                  </div>
                </div>
                <div class="form-field">
                  <label for="Cont"><h5>Contenido: </h5></label>
                  <textarea name="Contenido" id="Contenido" cols="30" rows="10"></textarea>
                </div><br />
                <div class="form-field">
                  <button class="btn waves-effect waves-light pink darken-4" type="submit" name="action">Guardar
                  <i class="material-icons right">send</i>
                  </button>
                  <button class="btn waves-effect waves-light pink darken-4" type="submit" name="action">Cancelar
                  <i class="material-icons right">cancel</i>
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
