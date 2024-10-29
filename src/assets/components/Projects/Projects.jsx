import React from "react";
import HeaderPriv from "../Layout/HeaderPriv";
import Footer from "../Footer/Footer";
import { useFetchProjects } from "../../../hooks/useFetchProjects";
import "../Projects/StyleProjecto.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const { data: projects, loading: loadingProjects } = useFetchProjects();

  return (
    <>
      <HeaderPriv />
      <div className="content-projects">
        {loadingProjects ? (
          <p className="loading-project">Cargando proyectos...</p>
        ) : projects && projects.length > 0 ? (
          projects.map((project) => (
            <Link key={project._id} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Link>
          ))
        ) : (
          <p>No hay proyectos</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Projects;
