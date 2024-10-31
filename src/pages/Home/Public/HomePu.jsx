import React from "react";
import Header from "../../Layout/Header";
import "../css/HomePu.css";
import Footer from "../../Footer/Footer";
const HomePu = () => {
  return (
    <>
      <Header></Header>
      <div className="main-home-public">
        <h1 className="title-home">Funcionalidades Principales</h1>
        <div className="content-proyect">
          <svg
            class="icon icon-tabler icon-tabler-git-pull-request-draft"
            fill="none"
            height="120"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M6 8v8" />
            <path d="M18 11h.01" />
            <path d="M18 6h.01" />
          </svg>
          <h2 className="content-proyect-title">Proyectos</h2>
          <p className="content-proyect-paragraph">
            Crea, desarrolla y organiza proyectos
          </p>
        </div>
        <div className="content-proyect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            style={{ fill: "rgb(8, 185, 141)" }}
          >
            <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z"></path>
            <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path>
            <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path>
          </svg>
          <h2 className="content-proyect-title">Epicas</h2>
          <p className="content-proyect-paragraph">
            Divide tu proyecto en epicas
          </p>
        </div>
        <div className="content-proyect">
          <svg
            class="icon icon-tabler icon-tabler-list-details"
            fill="none"
            height="120"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M13 5h8" />
            <path d="M13 9h5" />
            <path d="M13 15h8" />
            <path d="M13 19h5" />
            <rect height="6" rx="1" width="6" x="3" y="4" />
            <rect height="6" rx="1" width="6" x="3" y="14" />
          </svg>
          <h2 className="content-proyect-title">Historias</h2>
          <p className="content-proyect-paragraph">
            Gestiona historias para un seguimiento detallado
          </p>
        </div>
        <div className="content-proyect">
          <svg
            className="icon-tabler"
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            style={{ fill: "rgb(8, 185, 141)" }}
          >
            <path d="m10.933 13.519-2.226-2.226-1.414 1.414 3.774 3.774 5.702-6.84-1.538-1.282z"></path>
            <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
          </svg>
          <h2 className="content-proyect-title">Tareas</h2>
          <p className="content-proyect-paragraph">
            Crea, desarrolla y organiza proyectos
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePu;
