// Expresiones regulares compartidas por los validadores (migradas de docs/legacy/assets/js/validaciones.js)

export const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
export const regexNumeros = /^[0-9]+$/
export const regexCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/
export const regexRut9 = /^[0-9]{8}[0-9K]$/
// 4 a 10 caracteres, al menos 1 mayúscula y 1 número
export const regexClaveSegura = /^(?=.*[A-Z])(?=.*\d).{4,10}$/
