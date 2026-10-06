function Reportes() {
  const pagos = [
    { paciente: 'Lucas Gómez', servicio: 'Control de Peso', monto: '$41,650', estado: 'Pagado' },
    { paciente: 'Elena Rostova', servicio: 'Dieta Personalizada', monto: '$19,990', estado: 'Pendiente' },
    { paciente: 'Camila Rojas', servicio: 'Evaluación InBody', monto: '$37,820', estado: 'Pagado' },
  ]

  return (
    <main className="main-dashboard">
      <header className="topbar-admin">
        <div>
          <h1 className="saludo-admin">Reportes y Pagos</h1>
          <p className="subtitulo-admin">Resumen de ingresos y pagos</p>
        </div>
      </header>

      <section className="grid-metricas">
        <div className="tarjeta-metrica">
          <span className="label-metrica">Ingresos del Mes</span>
          <span className="valor-metrica">$1,450,000</span>
        </div>
        <div className="tarjeta-metrica">
          <span className="label-metrica">Pagos Realizados</span>
          <span className="valor-metrica">42</span>
        </div>
        <div className="tarjeta-metrica">
          <span className="label-metrica">Pendientes de Pago</span>
          <span className="valor-metrica">4</span>
        </div>
      </section>

      <section className="seccion-tabla-admin">
        <div className="cabecera-tabla-admin">
          <h2>Últimos Pagos</h2>
        </div>

        <div className="tabla-admin-contenedor">
          <table className="tabla-admin">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Servicio</th>
                <th>Monto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {pagos.map((p) => (
                <tr key={p.paciente}>
                  <td>{p.paciente}</td>
                  <td>{p.servicio}</td>
                  <td>{p.monto}</td>
                  <td>
                    <span className={p.estado === 'Pagado' ? 'badge badge-finalizado' : 'badge badge-pendiente'}>
                      {p.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Reportes