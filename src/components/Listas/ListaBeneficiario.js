import React, { Component } from 'react'

export default class ListaBeneficiario extends Component {
  render() {
    return (
      <div className="container">
        <h3>Lista de beneficiarios</h3>
        <div className="row">
          <table className=" striped">
            <thead>
              <tr>
                <th>Representante</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Institución</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Representante X</td>
                <td>12312323</td>
                <td>correo@mail.com</td>
                <td>Nombre de Institución</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam inventore iste perferendis doloribus
                  libero. A ex quaerat rem repellat error, nesciunt corporis enim culpa reprehenderit, rerum possimus?
              Sequi, qui.</td>
                <td>5</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Representante X</td>
                <td>12312323</td>
                <td>correo@mail.com</td>
                <td>Nombre de Institución</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam inventore iste perferendis doloribus
                  libero. A ex quaerat rem repellat error, nesciunt corporis enim culpa reprehenderit, rerum possimus?
              Sequi, qui.</td>
                <td>5</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Representante X</td>
                <td>12312323</td>
                <td>correo@mail.com</td>
                <td>Nombre de Institución</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam inventore iste perferendis doloribus
                  libero. A ex quaerat rem repellat error, nesciunt corporis enim culpa reprehenderit, rerum possimus?
              Sequi, qui.</td>
                <td>5</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
              <tr>
                <td>Representante X</td>
                <td>12312323</td>
                <td>correo@mail.com</td>
                <td>Nombre de Institución</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam inventore iste perferendis doloribus
                  libero. A ex quaerat rem repellat error, nesciunt corporis enim culpa reprehenderit, rerum possimus?
              Sequi, qui.</td>
                <td>5</td>
                <td><a href="#" className="waves-effect blue waves-light btn">Editar</a></td>
                <td><a href="#" className="waves-effect red waves-light btn">Eliminar</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
