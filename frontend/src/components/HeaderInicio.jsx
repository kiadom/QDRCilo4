import logoheader from '../media/logoheader.png';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const HeaderInicio = () => {
    return (
        <div className='header-inicio'>
            <div className="iconCompanyInicio">
                <img src= {logoheader} />
            </div>
            <div className='botonHeaderInicio'>
                <button>Registro</button>
                <button>Ingreso</button>
                <button>Usuario</button>
                <button><Logout/></button>
              </div>
            
        </div>
    )
};

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <NavLink to='/auth/login'>
          <div >
            <i  />
            <span >Cerrar Sesión</span>
          </div>
        </NavLink>
      </li>
       );
    };
