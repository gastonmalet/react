
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./imagenes/logo_booky.png"

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="110" alt="Libreria Booky" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/home"}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/productos"}>Productos</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;