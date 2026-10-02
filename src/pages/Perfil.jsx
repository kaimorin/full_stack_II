function Perfil(){
    return ( 
    <main className="contenedor-perfil">
    
  
        <aside className="sidebar-cuenta"/>
        <nav classNameName="menu-cuenta"/>
        <a href="#mi-cuenta" className="link-menu-cuenta activo">Mi Cuenta</a>
        <a href="#solicitudes" className="link-menu-cuenta">Mis Solicitudes</a>
        <a href="#tratamientos" className="link-menu-cuenta">Tratamientos</a>
        
        <hr className="separador-cuenta"/>

        <a href="#" className="sublink-cuenta">Libreta de Direcciones</a>
        <a href="#" className="sublink-cuenta">Informacion de la cuenta</a>
        <a href="#" className="sublink-cuenta">Metodos de pagos</a>

        <hr className="separador-cuenta"/>

        <a href="#" className="sublink-cuenta">Subcripciones a boletin informativo</a>

            <div className="bloque-cerrar-sesion">
            <a href="login.html" className="btn-cerrar-sesion">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Cerrar sesion
            </a>
            </div>
        <nav/>
        <aside/>


    <section className="panel-cuenta">
      <h1 className="titulo-bienvenida">Bienvenido Kanye</h1>

      <div className="grid-info-cuenta">
       
        <div className="tarjeta-info">
          <h3>Informacion de la Cuenta</h3>
          <p>Yezzus@yeezy.la</p>
          <p>Kanye West</p>
          <a href="#" className="link-accion-gris">Cambiar contraseña...</a>
        </div>

       
        <div className="tarjeta-info">
          <h3>Direcciones</h3>
          <p>Avenida Libertadores 2038</p>
          <a href="#" className="link-accion-gris">Agregar una nueva direccion...</a>
        </div>

        
        <div className="tarjeta-info info-personal-bloque">
          <h3>Informacion Personal</h3>
          <p>Fecha de Nacimiento: 17/3/98</p>
          <p>Tel: +56 9 34918234</p>
          <a href="#" className="link-accion-gris">Editar Informacion Personal...</a>
        </div>
      </div>

      
      <div className="cabecera-solicitudes" id="solicitudes">
        <h2>Mis Solicitudes</h2>
        <div className="caja-buscar-id">
          <input type="text" placeholder="Buscar por :ID"/>
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
            <tr>
              <td>Control de Peso</td>
              <td>En Tramite</td>
              <td>Presencial</td>
              <td>$41,650.00</td>
              <td>19 Feb, 2026</td>
              <td>CJ39842-1311</td>
              <td className="td-mas">...</td>
            </tr>
            <tr>
              <td>In body</td>
              <td>Atendido/a</td>
              <td>Presencial</td>
              <td>$37,820.00</td>
              <td>1 Nov, 2025</td>
              <td>BK90142-0111</td>
              <td className="td-mas">...</td>
            </tr>
            <tr>
              <td>Curso de Ayuno</td>
              <td>Finalizado</td>
              <td>Online</td>
              <td>$16,990.00</td>
              <td>3 Oct, 2025</td>
              <td>BK90143-0310</td>
              <td className="td-mas">...</td>
            </tr>
            <tr>
              <td>Dieta Personalizada</td>
              <td>Atendido/a</td>
              <td>Presencial</td>
              <td>$19,990.00</td>
              <td>10 Oct, 2025</td>
              <td>PO01293-1010</td>
              <td className="td-mas">...</td>
            </tr>
            <tr>
              <td>Curso de Dieta del agua</td>
              <td>Finalizado</td>
              <td>Online</td>
              <td>$32,901.00</td>
              <td>23 Oct, 2025</td>
              <td>VE27839-2310</td>
              <td className="td-mas">...</td>
            </tr>
          </tbody>
        </table>
      </div>

        <button type="button" className="btn-editar-solicitudes">Editar</button>
        </section>

  </main>)
}

export default Perfil