import{Link, NavLink} from 'react-router'

function Header() {
  return (
   <header className="header">
    <Link to="/" className="logo">NUTRIVIDA</Link>
    <nav className="nav">
      <ul>
        <li><NavLink to="/servicios">Servicios</NavLink></li>
        <li className="separador">|</li>
        <li><NavLink to="/profesionales">Profesionales</NavLink></li>
        <li className="separador">|</li>
        <li><NavLink to="/registro">Mi Salud</NavLink></li>
      </ul>
    </nav>
    <Link to="/datos" className="btn-agenda">Agenda ahora</Link>
  </header>
  )
}

export default Header;