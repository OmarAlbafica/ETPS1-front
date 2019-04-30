import React, { Component } from 'react';
import Select from "react-select";

export default class AddPerfilDocente extends Component {

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
      <div className="container ">
        <div className="row pink darken-4">
          <div className="col s12 m12 l12">
          </div>
        </div>
        <h3>Perfil Docente</h3>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field m12">
                  <label for="Docente"><h5>Docente:</h5></label>
                  <div className="col s12">
                    <Select
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    />
                  </div>
                </div>
                {[1, 2, 3, 4].map(x => <br />)}
                <div className="form-field">
                  <label for="Confirmacio"><h5>Coordinador</h5></label>
                  <p>
                    <label>
                      <input name="group1" type="radio" checked />
                      <span>Si</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name="group1" type="radio" />
                      <span>No</span>
                    </label>
                  </p>
                </div>
                <br />
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
