import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const navigate = useNavigate()

  function irA(id) {
    setMenuAbierto(false)
    navigate('/', { state: { ir: id } })
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        NUTRIVIDA
      </Link>

      <button
        className="menu-movil"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <nav className={menuAbierto ? 'nav nav-abierto' : 'nav'}>
        <ul>
          <li>
            <a href="#servicios" onClick={(e) => {
              e.preventDefault()
              irA('servicios')
            }}>
              Servicios
            </a>
          </li>

          <li className="separador">|</li>

          <li>
            <a href="#profesionales" onClick={(e) => {
              e.preventDefault()
              irA('profesionales')
            }}>
              Profesionales
            </a>
          </li>

          <li className="separador">|</li>

          <li>
            <Link to="/registro" onClick={() => setMenuAbierto(false)}>
              Mi Salud
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        to="/reserva/datos"
        className="btn-agenda"
        onClick={() => setMenuAbierto(false)}
      >
        Agenda ahora
      </Link>
    </header>
  )
}

export default Header
