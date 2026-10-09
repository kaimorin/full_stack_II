import { Link } from 'react-router'

function Confirmacion() {
  const citaGuardada = sessionStorage.getItem('cita')
  const cita = citaGuardada ? JSON.parse(citaGuardada) : null
  const doctor = cita?.doctor || 'Dra. Maria de Judas'
  const fecha = cita?.fecha || 'Fecha por confirmar'
  const hora = cita?.hora || 'Hora por confirmar'
  const especialidad = cita?.especialidad || ''

  return (
    <main>
      <section className="banner-confirmacion">
        <img src="assets/imagenes/banner-exito.jpg" alt="Confirmación exitosa" />
      </section>

      <section className="seccion-confirmacion">
        <div className="encabezado-confirmacion">
          <span className="logo-degradado">NUTRIVIDA</span>
        </div>

        <div className="caja-confirmacion">
          <h2 className="titulo-exito">¡Has agendado tu cita con éxito!</h2>

          <p className="texto-intro-confirmacion">
            Nos alegra confirmarte que tu consulta nutricional ya está reservada en nuestro sistema. Aquí tienes los detalles de tu atención:
          </p>

          <ul className="lista-detalles-cita">
            <li><strong>Especialista:</strong> {doctor}</li>
            {especialidad && <li><strong>Especialidad:</strong> {especialidad}</li>}
            <li><strong>Fecha:</strong> {fecha}</li>
            <li><strong>Hora:</strong> {hora}</li>
          </ul>

          <h3 className="subtitulo-recomendaciones">Recomendaciones para tu visita:</h3>

          <ul className="lista-recomendaciones">
            <li>Te sugerimos llegar con unos 10 minutos de anticipación para realizar tu ingreso con calma.</li>
            <li>Si cuentas con exámenes de sangre recientes, te recomendamos traerlos el día de tu evaluación.</li>
            <li>En caso de que necesites cancelar o reagendar, te pedimos hacerlo con al menos 24 horas de anticipación.</li>
          </ul>

          <p className="texto-despedida">
            Si tienes alguna consulta antes de tu cita, no dudes en contactarnos. ¡Te esperamos!
          </p>
        </div>

        <div className="contenedor-btn-volver">
          {/* Usar Link en lugar de index.html para mantener la SPA en React Router */}
          <Link to="/" className="btn-volver-inicio">Volver al Inicio</Link>
        </div>
      </section>
    </main>
  )
}

export default Confirmacion