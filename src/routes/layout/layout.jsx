import React from 'react'
// este componente reemplaza al las etiquetas principales (<></>)
import { Fragment} from 'react'
import { Outlet, Link } from 'react-router-dom'
import logoPrincipal from '../images/iconpok.png'
import './navigation.css'


const Layout = () => {
  return (
    <Fragment>
        <div>LOGO</div>
        <img className='logo' src={logoPrincipal} alt='logoPOK' />
        
        <nav>
            
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
        </nav>
        <div style={{display: "flex"}}>
          <div style={{marginLeft: "20px"}}>     
              {/* PARA PODER NAVEGAR ENTRE ENLACES ES NECESARIO COSNIDERAR EL OUTLET, iedntiiica a una seccion adicionalsegun el enrutador(SEGUN APP.JSX Y LO QUE ESTA DENTRO DE ROUTES) */}
              <Outlet />
          </div>
        </div>
       
    </Fragment>
  )
}

export default Layout