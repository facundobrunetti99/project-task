import React from 'react'
import HeaderPriv from '../Layout/HeaderPriv'

const Projects = () => {
  return (
    <>
    <HeaderPriv/>
    <div className="main-home-public">
    <div className="content-proyect">
    <svg class="icon icon-tabler icon-tabler-git-pull-request-draft" fill="none" height="120" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><circle cx="6" cy="18" r="2"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 8v8"/><path d="M18 11h.01"/><path d="M18 6h.01"/></svg>
      <h2 className="content-proyect-title">Proyectos</h2>
      <p className="content-proyect-paragraph">Crea, desarrolla y organiza proyectos</p>
    </div>
    </div>
    <Footer></Footer>
   
    </>
   
  )
}

export default Projects