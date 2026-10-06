import { Link } from 'react-router'

function Perfil() {
  const solicitudes = [
    { cita: 'Control de Peso', estado: 'En Tramite', tipo: 'Presencial', precio: '$41,650.00', fecha: '19 Feb, 2026', id: 'CJ39842-1311' },
    { cita: 'In body', estado: 'Atendido/a', tipo: 'Presencial', precio: '$37,820.00', fecha: '1 Nov, 2025', id: 'BK90142-0111' },
    { cita: 'Curso de Ayuno', estado: 'Finalizado', tipo: 'Online', precio: '$16,990.00', fecha: '3 Oct, 2025', id: 'BK90143-0310' },
    { cita: 'Dieta Personalizada', estado: 'Atendido/a', tipo: 'Presencial', precio: '$19,990.00', fecha: '10 Oct, 2025', id: 'PO01293-1010' },
    { cita: 'Curso de Dieta del agua', estado: 'Finalizado', tipo: 'Online', precio: '$32,901.00', fecha: '23 Oct, 2025', id: 'VE27839-2310' },
  ]

  return (
    <main className="contenedor-perfil">
      <aside className="sidebar-cuenta">
        <nav className="menu-cuenta">
          <Link to="/perfil" className="link-menu-cuenta activo">Mi Cuenta</Link>
          <Link to="/perfil" className="link-menu-cuenta">Mis Solicitudes</Link>
          <Link to="/perfil" className="link-menu-cuenta">Tratamientos</Link>

          <hr className="separador-cuenta" />

          <Link to="/perfil" className="sublink-cuenta">Libreta de Direcciones</Link>
          <Link to="/perfil" className="sublink-cuenta">Informacion de la cuenta</Link>
          <Link to="/perfil" className="sublink-cuenta">Metodos de pagos</Link>

          <hr className="separador-cuenta" />

          <Link to="/perfil" className="sublink-cuenta">Subcripciones a boletin informativo</Link>

          <div className="bloque-cerrar-sesion">
            <Link to="/login" className="btn-cerrar-sesion">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Cerrar sesion
            </Link>
          </div>
        </nav>
      </aside>

      <section className="panel-cuenta">
        <h1 className="titulo-bienvenida">Bienvenido Kanye</h1>

        <div className="grid-info-cuenta">
          <div className="tarjeta-info">
            <h3>Informacion de la Cuenta</h3>
            <p>Yezzus@yeezy.la</p>
            <p>Kanye West</p>
            <Link to="/perfil" className="link-accion-gris">Cambiar contraseña...</Link>
          </div>

          <div className="tarjeta-info">
            <h3>Direcciones</h3>
            <p>Avenida Libertadores 2038</p>
            <Link to="/perfil" className="link-accion-gris">Agregar una nueva direccion...</Link>
          </div>

          <div className="tarjeta-info info-personal-bloque">
            <h3>Informacion Personal</h3>
            <p>Fecha de Nacimiento: 17/3/98</p>
            <p>Tel: +56 9 34918234</p>
            <Link to="/perfil" className="link-accion-gris">Editar Informacion Personal...</Link>
          </div>
        </div>

        <div className="cabecera-solicitudes" id="solicitudes">
          <h2>Mis Solicitudes</h2>
          <div className="caja-buscar-id">
            <input type="text" placeholder="Buscar por :ID" />
          </div>
        </div>

        <div className="tabla-solicitudes-contenedor">
          <table className="tabla-solicitudes">
            <thead>
              <tr>
                <th>Citas</th>
                <th>Estado</th>
                <th>Tipo de Atencion</th>
                <th>Precio</th>
                <th>Fecha</th>
                <th>ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {solicitudes.map((s) => (
                <tr key={s.id}>
                  <td>{s.cita}</td>
                  <td>{s.estado}</td>
                  <td>{s.tipo}</td>
                  <td>{s.precio}</td>
                  <td>{s.fecha}</td>
                  <td>{s.id}</td>
                  <td className="td-mas">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="button" className="btn-editar-solicitudes">Editar</button>
      </section>
    </main>
  )
}

export default Perfil