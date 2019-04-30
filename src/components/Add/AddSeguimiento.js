import React, { Component } from 'react'
import Select from "react-select";
import { Link } from "react-router-dom";

export default class AddSeguimiento extends Component {
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
      { value: 'chocolate', label: 'Ing Cornejo' },
      { value: 'strawberry', label: 'Lic Acevedo' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
      <div className="container">
        <h3>Nuevo Seguimiento</h3>
        <div className="row">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <div className="row white z-depth-2">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="guial"><h5>Guia: </h5></label>
                  <h5>Jardin Botanico</h5>
                </div>
                <div className="form-field">
                  <label for="estudiantesl"><h5>Numero de estudaintes: </h5></label>
                  <input type="number" name="nestu" id="nestu" value="15" />
                </div>
                <div className="form-field">
                  <label for="benefi"><h5>Numero de beneficiarios: </h5></label>
                  <input type="number" name="nestu" id="nestu" value="15" />
                </div>
                <div className="form-field">
                  <label for="Docente"><h5>Docente Responsable: </h5></label>
                  <div className="input-field">
                    <Select
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label for="descN"><h5>Descripcion: </h5></label>
                  <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                  <label for="evid"><h5>Evidencia: </h5></label>
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action"> Subir Archivo</button>
                </div><br />
                <div className="form-field">
                  <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action">Guardar
                    <i className="material-icons right">send</i>
                  </button>
                  <button  className="btn waves-effect waves-light pink darken-4" type="submit" name="action" ><Link to="/perfiles/id/guias-trabajo/id/seguimientos">Cancelar</Link>
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
