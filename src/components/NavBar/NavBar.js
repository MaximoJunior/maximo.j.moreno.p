import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="n" href="#"></a>
                <NavLink to="/" className="navbar-brand" exact>
                      User APP
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/" activeClassName="active" className="nav-item nav-link" exact>
                        Agregar Usuarios
                    </NavLink>
                    <NavLink to="/user-list" activeClassName="active" className="nav-item nav-link" exact>
                       Listado Usuarios
                    </NavLink>
                    <NavLink to="/departments" activeClassName="active" className="nav-item nav-link" exact>
                       Departamentos
                    </NavLink>
                </div>
                </div>
            </div>
        </nav>)

}
