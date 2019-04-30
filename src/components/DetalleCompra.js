import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DetalleCompra extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-field">
          <br />
          <Link to="/perfiles/id" className="btn waves-effect waves-light pink darken-4"><i className="material-icons right">arrow_back</i>Atrás
          </Link>
        </div>
        <h3>Detalle Compra: </h3>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <div className="form-field">
                  <label for="Codigo"><h5>Codigo: </h5></label>
                  <h5 className="green-text">1010</h5>
                </div>
                <div className="form-field">
                  <label for="Idp"><h5>Id Proveedor: </h5></label>
                  <div className="input-field">
                    <select name="IdProveedor" id="IdProveedor" className="grey-text">
                      <option value="1">Proveedor 1</option>
                      <option value="2">Proveedor 2</option>
                      <option value="3">Proveedor 3</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label for="Descripcion"><h5>Descripcion: </h5></label>
                  <textarea name="Desc" id="Desc" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                  <label for="Descripcion"><h5>Caracteristicas: </h5></label>
                  <textarea name="Car" id="Car" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                  <label for="PI"><h5>Precio Iva: </h5></label>
                  <input type="text" />
                </div>
                <div className="form-filed">
                  <label for="Obs"><h5>Observaciones: </h5></label>
                  <textarea name="Obse" id="Obse" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                  <label for="FirmaC"><h5>Firma del Coordinador: </h5></label>
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
                </div><br />
                <div className="form-field">
                  <label for="FirmaC"><h5>Firma del Director: </h5></label>
                  <p>
                    <label>
                      <input name="group2" type="radio" checked />
                      <span>Si</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name="group2" type="radio" />
                      <span>No</span>
                    </label>
                  </p>
                </div><br />
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
