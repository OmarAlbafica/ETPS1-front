import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer #ae193e pink darken-4">
      <div className="container_end #ae193e pink darken-4">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text"></h5>
            <p className="grey-text text-lighten-4">Compromiso Agresivo</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Nuestra Universidad</h5>
            <ul>
              UTEC PROYECCION SOCIAL
              Universidad Tecnológica de El Salvador

                </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          ©2019 Copyright Utec
            <a className="grey-text text-lighten-4 right" href="https://www.utecvirtual.edu.sv">Utec</a>
        </div>
      </div>
    </footer>
  )
}
