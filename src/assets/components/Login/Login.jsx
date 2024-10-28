import React from "react";
import Header from "../Layout/Header";
import "../Login/css/Login.css";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(username, password);
        navigate('/protected')
    
    } catch (error) {
        console.error('Error al iniciar sesión', error);
    }
};

  return (
    <>
      <Header></Header>

      <div className="coteiner_login">
        <h2 className="tittle_login">Iniciar Sesión</h2>
        <form className="form_login" onSubmit={handleSubmit}>
          <input
            className="input_text_user"
            type="text"
            placeholder="Ingresar usuario"
            value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
          />

          <input
            type="password"
            className="input_text_pw"
            placeholder="Ingresar contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <button type="submit" className="button_form" >Iniciar sesion</button>
        </form>
       

        <a className="pw_a" href="#">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Login;
