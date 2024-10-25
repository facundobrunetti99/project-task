import React from 'react'
import Header from '../Layout/Header'
import '../Login/css/Login.css'
import Footer from '../Footer/Footer'

const Login = () => {
  return (

    <>
    <Header></Header>
    
    <div className='coteiner_login'>
    <h2 className="tittle_login">Iniciar Sesión</h2>
            <form className='form_login'>
                <input
                className='input_text_user'
                 type="text" 
                 placeholder='Ingresar usuario'
                 />

                <input type="password" 
                className='input_text_pw'
                 placeholder='Ingresar contraseña'
                 />
            </form>
            <button className='button_form'>Iniciar sesion</button>

            <a className="pw_a" href="#">¿Olvidaste tu contraseña?</a>
    </div>

    <Footer></Footer>
    </>
  )
}

export default Login