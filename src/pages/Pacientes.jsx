function Pacientes() {
  const pacientes = [
    { nombre: 'Lucas Gómez', rut: '12.345.678-9', telefono: '+56 9 1111 1111', servicio: 'Control de Peso' },
    { nombre: 'Elena Rostova', rut: '13.456.789-0', telefono: '+56 9 2222 2222', servicio: 'Nutrición Deportiva' },
    { nombre: 'Camila Rojas', rut: '14.567.890-1', telefono: '+56 9 3333 3333', servicio: 'Salud Digestiva' },
  ]

  return (
    <main className="main-dashboard">
      <header className="topbar-admin">
        <div>
          <h1 className="saludo-admin">Pacientes</h1>
          <p className="subtitulo-admin">Listado de pacientes registrados</p>
        </div>
        <div className="buscador-admin">
          <input type="text" placeholder="Buscar paciente o RUT..." />
        </div>
      </header>

      <section className="seccion-tabla-admin">
        <div className="tabla-admin-contenedor">
          <table className="tabla-admin">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>RUT</th>
                <th>Teléfono</th>
                <th>Servicio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((p) => (
                <tr key={p.rut}>
                  <td>{p.nombre}</td>
                  <td>{p.rut}</td>
                  <td>{p.telefono}</td>
                  <td>{p.servicio}</td>
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

export default Pacientes