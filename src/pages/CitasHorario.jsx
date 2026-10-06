function CitasHorarios() {
  const citas = [
    { paciente: 'Lucas Gómez', especialista: 'Dra. Maria de Judas', fecha: '19 Feb - 09:30 AM', estado: 'Confirmado' },
    { paciente: 'Elena Rostova', especialista: 'Dr. Maximo Tul´Onazo', fecha: '19 Feb - 10:15 AM', estado: 'Pendiente' },
    { paciente: 'Camila Rojas', especialista: 'Dra. Maria de Judas', fecha: '19 Feb - 11:00 AM', estado: 'Atendido' },
  ]

  return (
    <main className="main-dashboard">
      <header className="topbar-admin">
        <div>
          <h1 className="saludo-admin">Citas y Horarios</h1>
          <p className="subtitulo-admin">Agenda de todas las citas</p>
        </div>
      </header>

      <section className="seccion-tabla-admin">
        <div className="cabecera-tabla-admin">
          <h2>Citas</h2>
          <button className="btn-nueva-cita">+ Nueva Cita</button>
        </div>

        <div className="tabla-admin-contenedor">
          <table className="tabla-admin">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Especialista</th>
                <th>Fecha y Hora</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((c) => (
                <tr key={c.paciente}>
                  <td>{c.paciente}</td>
                  <td>{c.especialista}</td>
                  <td>{c.fecha}</td>
                  <td><span className="badge badge-progreso">{c.estado}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default CitasHorarios