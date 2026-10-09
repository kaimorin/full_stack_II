function Dashboard() {
    return(<main className="main-dashboard">
      
      <header className="topbar-admin">
        <div>
          <h1 className="saludo-admin">Panel General</h1>
          <p className="subtitulo-admin">Bienvenido de vuelta, Dr. Administrador</p>
        </div>
        <div className="buscador-admin">
          <input type="text" placeholder="Buscar paciente, RUT o ID..."/>
        </div>
      </header>

      
      <section className="grid-metricas">
        <div className="tarjeta-metrica">
          <span className="label-metrica">Citas de Hoy</span>
          <span className="valor-metrica">18</span>
        </div>
        <div className="tarjeta-metrica">
          <span className="label-metrica">Pacientes Activos</span>
          <span className="valor-metrica">1,240</span>
        </div>
        <div className="tarjeta-metrica">
          <span className="label-metrica">Ingresos del Mes</span>
          <span className="valor-metrica">$1,450,000</span>
        </div>
        <div className="tarjeta-metrica">
          <span className="label-metrica">Pendientes de Pago</span>
          <span className="valor-metrica">4</span>
        </div>
      </section>

     
      <section className="seccion-tabla-admin">
        <div className="cabecera-tabla-admin">
          <h2>Próximas Citas Médicas</h2>
          <button className="btn-nueva-cita">+ Nueva Cita</button>
        </div>

        <div className="tabla-admin-contenedor">
          <table className="tabla-admin">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Especialista</th>
                <th>Servicio</th>
                <th>Fecha y Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kanye West</td>
                <td>Dra. Maria de Judas</td>
                <td>Control de Peso</td>
                <td>19 Feb - 09:30 AM</td>
                <td><span className="badge badge-progreso">Confirmado</span></td>
                <td><button className="btn-accion-tabla">Ver</button></td>
              </tr>
              <tr>
                <td>Elena Rostova</td>
                <td>Dr. Maximo Tul´Onazo</td>
                <td>Dieta Personalizada</td>
                <td>19 Feb - 10:15 AM</td>
                <td><span className="badge badge-pendiente">Pendiente</span></td>
                <td><button className="btn-accion-tabla">Ver</button></td>
              </tr>
              <tr>
                <td>Lucas Gómez</td>
                <td>Dra. Maria de Judas</td>
                <td>Evaluación InBody</td>
                <td>19 Feb - 11:00 AM</td>
                <td><span className="badge badge-finalizado">Atendido</span></td>
                <td><button className="btn-accion-tabla">Ver</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>)
}
export default Dashboard;