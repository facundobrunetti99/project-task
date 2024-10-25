import React from 'react'
import './layoutcss/HeaderPriv.css'
const HeaderPriv = () => {
    return (
      <div className="conteiner-header">
        <div className="conteiner-menu-login">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)" }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </a>
        </div>
        <p className="conteiner-tittle-header">Task Tracer</p>
      </div>
    );
}

export default HeaderPriv