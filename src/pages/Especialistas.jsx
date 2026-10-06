function Especialistas() {
  const especialistas = [
    { nombre: 'Maria de Judas', especialidad: 'Nutrición Clínica', modalidad: 'Presencial y Online' },
    { nombre: 'Maximo Tul´Onazo', especialidad: 'Nutrición Deportiva', modalidad: 'Presencial' },
    { nombre: 'Mario Di West', especialidad: 'Control de Peso', modalidad: 'Online' },
    { nombre: 'Shaqueal O´neal', especialidad: 'Salud Digestiva', modalidad: 'Presencial y Online' },
  ]

  return (
    <main className="main-dashboard">
      <header className="topbar-admin">
        <div>
          <h1 className="saludo-admin">Especialistas</h1>
          <p className="subtitulo-admin">Equipo de profesionales</p>
        </div>
      </header>

      <section className="seccion-tabla-admin">
        <div className="cabecera-tabla-admin">
          <h2>Equipo</h2>
          <button className="btn-nueva-cita">+ Nuevo Especialista</button>
        </div>

        <div className="tabla-admin-contenedor">
          <table className="tabla-admin">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Modalidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {especialistas.map((e) => (
                <tr key={e.nombre}>
                  <td>{e.nombre}</td>
                  <td>{e.especialidad}</td>
                  <td>{e.modalidad}</td>
                  <td><button className="btn-accion-tabla">Ver</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Especialistas