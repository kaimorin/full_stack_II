function Dashboard() {
    return(<main class="main-dashboard">
      
      <header class="topbar-admin">
        <div>
          <h1 class="saludo-admin">Panel General</h1>
          <p class="subtitulo-admin">Bienvenido de vuelta, Dr. Administrador</p>
        </div>
        <div class="buscador-admin">
          <input type="text" placeholder="Buscar paciente, RUT o ID..."/>
        </div>
      </header>

      
      <section class="grid-metricas">
        <div class="tarjeta-metrica">
          <span class="label-metrica">Citas de Hoy</span>
          <span class="valor-metrica">18</span>
        </div>
        <div class="tarjeta-metrica">
          <span class="label-metrica">Pacientes Activos</span>
          <span class="valor-metrica">1,240</span>
        </div>
        <div class="tarjeta-metrica">
          <span class="label-metrica">Ingresos del Mes</span>
          <span class="valor-metrica">$1,450,000</span>
        </div>
        <div class="tarjeta-metrica">
          <span class="label-metrica">Pendientes de Pago</span>
          <span class="valor-metrica">4</span>
        </div>
      </section>

     
      <section class="seccion-tabla-admin">
        <div class="cabecera-tabla-admin">
          <h2>Próximas Citas Médicas</h2>
          <button class="btn-nueva-cita">+ Nueva Cita</button>
        </div>

        <div class="tabla-admin-contenedor">
          <table class="tabla-admin">
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
                <td><span class="badge badge-progreso">Confirmado</span></td>
                <td><button class="btn-accion-tabla">Ver</button></td>
              </tr>
              <tr>
                <td>Elena Rostova</td>
                <td>Dr. Maximo Tul´Onazo</td>
                <td>Dieta Personalizada</td>
                <td>19 Feb - 10:15 AM</td>
                <td><span class="badge badge-pendiente">Pendiente</span></td>
                <td><button class="btn-accion-tabla">Ver</button></td>
              </tr>
              <tr>
                <td>Lucas Gómez</td>
                <td>Dra. Maria de Judas</td>
                <td>Evaluación InBody</td>
                <td>19 Feb - 11:00 AM</td>
                <td><span class="badge badge-finalizado">Atendido</span></td>
                <td><button class="btn-accion-tabla">Ver</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>)
}
export default Dashboard;