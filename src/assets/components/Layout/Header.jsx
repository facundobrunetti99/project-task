import React from "react";
import "./layoutcss/Header.css";
const Header = () => {
  return (
    <div className="conteiner-header">
      <p className="conteiner-tittle-header">Seguimiento de tareas</p>

      <div className="conteiner-menu-login">
        <li className="li-login">
          <a href="#">Iniciar sesion</a>
        </li>
        <li className="li-login singup-li">
          <a href="#">Registrarse</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
