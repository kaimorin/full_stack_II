// Estilos de feedback visual de los campos (borde y mensaje en rojo/verde),
// equivalentes a mostrarError / mostrarExito del archivo legacy.

const COLOR_ERROR = '#d32f2f'
const COLOR_EXITO = '#388e3c'

// resultado: { valido, mensaje } devuelto por un validador. tocado: el usuario ya escribió en el campo.
export const estiloInput = (resultado, tocado) =>
  tocado
    ? {
        borderColor: resultado.valido ? COLOR_EXITO : COLOR_ERROR,
        borderWidth: '2px',
        borderStyle: 'solid',
      }
    : undefined

export const estiloMensaje = (resultado, tocado) =>
  tocado ? { color: resultado.valido ? COLOR_EXITO : COLOR_ERROR } : undefined

// Estilo del botón de envío: apagado mientras el formulario no sea válido
export const estiloBoton = (habilitado) => ({
  opacity: habilitado ? 1 : 0.5,
  cursor: habilitado ? 'pointer' : 'not-allowed',
})
