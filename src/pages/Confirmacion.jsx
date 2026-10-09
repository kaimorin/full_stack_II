function Confirmacion (){
    return (  <main>
    
    <section className="banner-confirmacion">
      <img src="assets/imagenes/banner-exito.jpg" alt="Confirmación exitosa"/>
    </section>

    
    <section className="seccion-confirmacion">
      <div className="encabezado-confirmacion">
        <span className="logo-degradado">NUTRIVIDA</span>
      </div>

      
      <div className="caja-confirmacion">
        <h2 className="titulo-exito">Haz Agendado Tu cita con exito!!!</h2>

        <p className="texto-intro-confirmacion">
          Nos alegra confirmarte que tu consulta nutricional ya está reservada en nuestro sistema. Aquí tienes los detalles de tu atención:
        </p>

        <ul className="lista-detalles-cita">
          <li><strong>Especialista:</strong> Dra. Maria de Judas</li>
          <li><strong>Fecha:</strong> Sábado, 16 de febrero de 2026</li>
          <li><strong>Hora:</strong> 09:16 AM</li>
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
        <a href="index.html" className="btn-volver-inicio">Volver al Inicio</a>
      </div>
    </section>
  </main>)
}

export default Confirmacion