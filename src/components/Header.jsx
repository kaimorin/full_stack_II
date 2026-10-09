import { Link, NavLink, useLocation, useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  function irASeccion(e, id) {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { ir: id } })
    }
  }

  return (
    <header className="header">
      <Link to="/" className="logo">NUTRIVIDA</Link>
      <nav className="nav">
        <ul>
          <li><a href="#servicios" onClick={(e) => irASeccion(e, 'servicios')}>Servicios</a></li>
          <li className="separador">|</li>
          <li><a href="#profesionales" onClick={(e) => irASeccion(e, 'profesionales')}>Profesionales</a></li>
          <li className="separador">|</li>
          <li><NavLink to="/registro">Mi Salud</NavLink></li>
        </ul>
      </nav>
      <Link to="/reserva/datos" className="btn-agenda">Agenda ahora</Link>
    </header>
  )
}

export default Header