export const DURACION_SCROLL = 1140

export function scrollSuave(id, duracion = DURACION_SCROLL) {
  const seccion = document.getElementById(id)
  if (!seccion) return

  const inicioY = window.scrollY
  const destinoY = seccion.getBoundingClientRect().top + window.scrollY
  let inicioTiempo = null

  function paso(ahora) {
    if (inicioTiempo === null) inicioTiempo = ahora
    const progreso = Math.min((ahora - inicioTiempo) / duracion, 1)
    window.scrollTo(0, inicioY + (destinoY - inicioY) * progreso)
    if (progreso < 1) requestAnimationFrame(paso)
  }
  requestAnimationFrame(paso)
}