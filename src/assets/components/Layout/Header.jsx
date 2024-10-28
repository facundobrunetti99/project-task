import React from "react";
import "./layoutcss/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="conteiner-header">
      <Link className="conteiner-tittle-header" to="/">Seguimiento de tareas</Link>

      <div className="conteiner-menu-login">
        <li className="li-login">
        <Link to="/login">Iniciar sesion</Link>
        </li>
        <li className="li-login singup-li">
        <Link to="/login">Registrarse</Link>
          
        </li>
      </div>
    </div>
  );
};

export default Header;
