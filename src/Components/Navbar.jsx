import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatch, theme} = useContextGlobal()

  return (
    <nav className='nav' id={theme.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='links-navbar'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favs</Link>
      </div>
      <button className='btn-theme' onClick={() => dispatch({type: "theme"})}>🌞Change theme🌜</button>
    </nav>
  )
}

export default Navbar;