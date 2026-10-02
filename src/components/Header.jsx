function Header() {
  return (
   <header className="header">
    <a href="index.html" class="logo">NUTRIVIDA</a>
    <nav className="nav">
      <ul>
        <li><a href="#servicios">Servicios</a></li>
        <li className="separador">|</li>
        <li><a href="#profesionales">Profesionales</a></li>
        <li className="separador">|</li>
        <li><a href="registro.html">Mi Salud</a></li>
      </ul>
    </nav>
    <a href="registro.html" className="btn-agenda">Agenda ahora</a>
  </header>
  )
}

export default Header;