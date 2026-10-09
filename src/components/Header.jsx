import { Link } from 'react-router'

function Header() {
  return (
   <header className="header">
    <Link to="/" className="logo">NUTRIVIDA</Link>
    <nav className="nav">
      <ul>
        <li><Link to="/#servicios">Servicios</Link></li>
        <li className="separador">|</li>
        <li><Link to="/#profesionales">Profesionales</Link></li>
        <li className="separador">|</li>
        <li><Link to="/registro">Mi Salud</Link></li>
      </ul>
    </nav>
    <Link to="reserva/datos" className="btn-agenda">Agenda ahora</Link>
  </header>
  )
}

export default Header;