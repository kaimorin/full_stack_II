import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import banner from '../assets/banner-agenda.jpg'

const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const HORAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const MINUTOS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

function primerDiaDisponible() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  if (d.getDay() === 0) d.setDate(d.getDate() + 1)
  return d
}

function opcionesRueda(valores, actual) {
  const pos = valores.indexOf(actual)
  const lista = []
  for (let i = -3; i <= 3; i++) {
    const idx = (pos + i + valores.length) % valores.length
    lista.push(valores[idx])
  }
  return lista
}

function Agenda() {
  const navigate = useNavigate()
  const hoy = primerDiaDisponible()

  const [fecha, setFecha] = useState(hoy)
  const [mes, setMes] = useState(hoy.getMonth())
  const [anio, setAnio] = useState(hoy.getFullYear())
  const [hora, setHora] = useState(11)
  const [minuto, setMinuto] = useState(0)
  const [ampm, setAmpm] = useState('AM')
  const [error, setError] = useState('')


  const horaTexto = `${hora}:${String(minuto).padStart(2, '0')} ${ampm}`
  const fechaCorta = `${MESES[fecha.getMonth()].slice(0, 3)} ${fecha.getDate()}, ${fecha.getFullYear()}`
  const fechaLarga = `${DIAS[fecha.getDay()]}, ${fecha.getDate()} de ${MESES[fecha.getMonth()].toLowerCase()} de ${fecha.getFullYear()}`

 
  const primerDiaSemana = new Date(anio, mes, 1).getDay()
  const diasDelMes = new Date(anio, mes + 1, 0).getDate()
  const diasMesAnterior = new Date(anio, mes, 0).getDate()

  const celdas = []
  for (let i = primerDiaSemana - 1; i >= 0; i--) {
    celdas.push({ numero: diasMesAnterior - i, fuera: true, mesOffset: -1 })
  }
  for (let d = 1; d <= diasDelMes; d++) {
    celdas.push({ numero: d, fuera: false, mesOffset: 0 })
  }
  let proximo = 1
  while (celdas.length % 7 !== 0) {
    celdas.push({ numero: proximo++, fuera: true, mesOffset: 1 })
  }

  function cambiarMes(cambio) {
    let nuevoMes = mes + cambio
    let nuevoAnio = anio
    if (nuevoMes < 0) {
      nuevoMes = 11
      nuevoAnio--
    } else if (nuevoMes > 11) {
      nuevoMes = 0
      nuevoAnio++
    }
    setMes(nuevoMes)
    setAnio(nuevoAnio)
  }

  function irAHoy() {
    setFecha(hoy)
    setMes(hoy.getMonth())
    setAnio(hoy.getFullYear())
  }

  function seleccionarDia(celda) {
    if (celda.fuera) return
    const nuevaFecha = new Date(anio, mes, celda.numero)
    nuevaFecha.setHours(0, 0, 0, 0)
    setFecha(nuevaFecha)
  }

  function siguiente(e) {
    e.preventDefault()

    let hora24 = hora % 12
    if (ampm === 'PM') hora24 += 12
    const minutosDelDia = hora24 * 60 + minuto

    // Horario: 10:30 AM a 5:30 PM (10:30 a 17:30)
    if (minutosDelDia < 10 * 60 + 30 || minutosDelDia > 17 * 60 + 30) {
      setError('Atendemos de lunes a sábado, de 10:30 AM a 5:30 PM. Elige otra hora.')
      return
    }
    setError('')

    const datos = new FormData(e.currentTarget)
    const cita = {
      doctor: datos.get('doctor'),
      modalidad: datos.get('modalidad'),
      especialidad: datos.get('especialidad'),
      fecha: fechaLarga,
      hora: horaTexto,
    }

    sessionStorage.setItem('cita', JSON.stringify(cita))
    navigate('/reserva/pago')
  }

  return (
    <main className="agenda-page">
      <section className="banner-agenda">
        <img src={banner} alt="Calendario" className="img-banner-agenda" />
      </section>

      <section className="pasos-agenda">
        <div className="paso">1. Datos Personales</div>
        <div className="paso paso-activo">2. Doctor y Especialidad</div>
        <div className="paso">3. Pago y facturacion</div>
      </section>

      {error && <div className="alerta-error">{error}</div>}

      <section className="contenedor-agenda">
        <form id="formAgenda" className="columna-doctores" onSubmit={siguiente}>
          <label className="tarjeta-radio-doc">
            <input type="radio" name="doctor" value="Maria de Judas" defaultChecked />
            <div className="circulo-check"></div>
            <div className="info-doc">
              <strong>Maria de Judas</strong>
              <p>Experta en el manejo de enfermedades metabólicas. Crea dietas terapéuticas para controlar condiciones como diabetes, resistencia a la insulina e hipertensión.</p>
            </div>
          </label>

          <label className="tarjeta-radio-doc">
            <input type="radio" name="doctor" value="Maximo Tul Onazzo" />
            <div className="circulo-check"></div>
            <div className="info-doc">
              <strong>Maximo Tul 'Onazzo</strong>
              <p>Enfocado en la recomposición corporal y el rendimiento físico. Diseña planes para aumentar masa muscular, mejorar la recuperación y optimizar la energía.</p>
            </div>
          </label>

          <label className="tarjeta-radio-doc">
            <input type="radio" name="doctor" value="Mario Di West" />
            <div className="circulo-check"></div>
            <div className="info-doc">
              <strong>Mario Di 'West</strong>
              <p>Centrado en la pérdida de grasa sostenible y la educación alimentaria. Trabaja en modificar hábitos a largo plazo sin utilizar dietas extremas o restrictivas.</p>
            </div>
          </label>

          <label className="tarjeta-radio-doc">
            <input type="radio" name="doctor" value="Shaqueal Oneal" />
            <div className="circulo-check"></div>
            <div className="info-doc">
              <strong>Shaqueal O'neal</strong>
              <p>Experto en el microbioma intestinal. Su enfoque está en tratar inflamaciones, síndrome de intestino irritable y alergias alimentarias para mejorar la digestión.</p>
            </div>
          </label>

          <div className="fila-modalidad">
            <label className="tarjeta-radio-modalidad">
              <input type="radio" name="modalidad" value="Presencial" defaultChecked />
              <div className="circulo-check"></div>
              <span>Presencial</span>
            </label>

            <label className="tarjeta-radio-modalidad">
              <input type="radio" name="modalidad" value="Online" />
              <div className="circulo-check"></div>
              <span>Online</span>
            </label>
          </div>

          <div className="campo-select-esp">
            <select id="selectEspecialidad" name="especialidad" defaultValue="" required>
              <option value="" disabled>Especialidad...</option>
              <option value="nutricion-clinica">Nutrición Clínica</option>
              <option value="nutricion-deportiva">Nutrición Deportiva</option>
              <option value="salud-digestiva">Salud Digestiva</option>
              <option value="control-peso">Control de Peso</option>
            </select>
          </div>

          <div className="fila-botones-paso">
            <button type="submit" className="btn-siguiente-paso" id="btnSiguientePaso">Siguiente</button>
            <Link to="/reserva/datos" className="btn-volver-paso">Volver</Link>
          </div>
        </form>

        <aside className="columna-picker">
          <div className="resumen-pildoras">
            <span>Fecha</span>
            <span className="pildora-tag">{fechaCorta}</span>
            <span className="pildora-tag">{horaTexto}</span>
          </div>

          <div className="widget-calendario">
            <div className="cal-barra-dia">{DIAS[fecha.getDay()]}</div>
            <div className="cal-cabecera-mes">
              <button type="button" onClick={() => cambiarMes(-1)}>&lt;</button>
              <div className="cal-mes">{MESES[mes].slice(0, 3).toUpperCase()}</div>
              <div className="cal-dia-numero">{fecha.getDate()}</div>
              <div className="cal-anio">{anio}</div>
              <button type="button" onClick={() => cambiarMes(1)}>&gt;</button>
            </div>

            <div className="cal-cuerpo">
              <div className="cal-dias-semana">
                <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
              </div>
              <div className="cal-matriz-numeros">
                {celdas.map((c, i) => {
                  const esSeleccionado = !c.fuera && fecha.getDate() === c.numero && fecha.getMonth() === mes && fecha.getFullYear() === anio
                  return (
                    <span
                      key={i}
                      onClick={() => seleccionarDia(c)}
                      className={`${c.fuera ? 'dia-apagado' : ''} ${esSeleccionado ? 'dia-marcado' : ''}`}
                      style={{ cursor: c.fuera ? 'default' : 'pointer' }}
                    >
                      {c.numero}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="cal-acciones">
              <button type="button" className="btn-cal-cancel" onClick={irAHoy}>HOY</button>
              <button type="button" className="btn-cal-ok">OK</button>
            </div>
          </div>

          <div className="widget-hora">
            <div className="hora-header">
              <span>Hora</span>
              <span className="hora-valor">{horaTexto}</span>
            </div>

            <div className="hora-selector-rueda">
              {/* Selector Hora */}
              <div className="col-rueda">
                {opcionesRueda(HORAS, hora).map((h, i) => (
                  <span
                    key={i}
                    onClick={() => setHora(h)}
                    className={`op-rueda ${h === hora ? 'activa' : 'apagado'}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Selector Minutos */}
              <div className="col-rueda">
                {opcionesRueda(MINUTOS, minuto).map((m, i) => (
                  <span
                    key={i}
                    onClick={() => setMinuto(m)}
                    className={`op-rueda ${m === minuto ? 'activa' : 'apagado'}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {String(m).padStart(2, '0')}
                  </span>
                ))}
              </div>

              {/* Selector AM/PM */}
              <div className="col-rueda col-meridiano">
                <span
                  onClick={() => setAmpm('AM')}
                  className={`op-rueda ${ampm === 'AM' ? 'activa' : 'apagado'}`}
                  style={{ cursor: 'pointer' }}
                >
                  AM
                </span>
                <span
                  onClick={() => setAmpm('PM')}
                  className={`op-rueda ${ampm === 'PM' ? 'activa' : 'apagado'}`}
                  style={{ cursor: 'pointer' }}
                >
                  PM
                </span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Agenda