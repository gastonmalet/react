import React from "react";
import logo from "./imagenes/logo_booky.png"

const Header = () => {
    return (
        <div className="container-fuid header">
        <div className="container">
                    <ul class="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="150" alt="Libreria Booky"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Contacto</a>
        </li>
      </ul>
        </div>
        </div>
    )
}

export default Header;