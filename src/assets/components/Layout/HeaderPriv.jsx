import './layoutcss/HeaderPriv.css'
import { useAuth } from '../../../auth/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from './DropDownMenu';
const HeaderPriv = () => {
    const {logout}=useAuth();
    const navigate=useNavigate();

    const onClickCerrar =() => {
      try {
          logout();
          navigate('/')
      
      } catch (error) {
          console.error('Error al cerra sesion', error);
      }
  };
 

    return (
      <div className="conteiner-header">
       {/*  <div className="conteiner-menu-login">
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
        </div> */}
        <DropdownMenu></DropdownMenu>
        <Link to="/home" className="conteiner-tittle-header">Seguimiento de tareas</Link>
        <Link to="/" className='close_a' onClick={onClickCerrar}>Cerra Sesion</Link>
      </div>
    );
}

export default HeaderPriv