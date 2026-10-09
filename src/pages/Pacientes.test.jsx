import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pacientes from './Pacientes.jsx'

describe('Pacientes', () => {
  it('renderiza la cabecera de administración y el buscador correctamente', () => {
    render(<Pacientes />)

    // Validar título y subtítulo de la sección
    expect(screen.getByRole('heading', { name: /^pacientes$/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Listado de pacientes registrados')).toBeInTheDocument()

    // Validar la barra de búsqueda
    const buscador = screen.getByPlaceholderText('Buscar paciente o RUT...')
    expect(buscador).toBeInTheDocument()
  })

  it('permite escribir en el cuadro de búsqueda de pacientes', async () => {
    render(<Pacientes />)

    const buscador = screen.getByPlaceholderText('Buscar paciente o RUT...')
    
    // Simular la escritura de un RUT de prueba
    await userEvent.type(buscador, '12.345.678-9')
    expect(buscador).toHaveValue('12.345.678-9')
  })

  it('renderiza la tabla con los encabezados y la lista completa de pacientes', () => {
    render(<Pacientes />)

    // Validar que se muestren las columnas de la tabla administrativa
    expect(screen.getByRole('columnheader', { name: /nombre/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /rut/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /teléfono/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /servicio/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /acciones/i })).toBeInTheDocument()

    // Validar los datos del primer paciente (Lucas Gómez)
    expect(screen.getByText('Lucas Gómez')).toBeInTheDocument()
    expect(screen.getByText('12.345.678-9')).toBeInTheDocument()
    expect(screen.getByText('+56 9 1111 1111')).toBeInTheDocument()
    expect(screen.getByText('Control de Peso')).toBeInTheDocument()

    // Validar los datos del segundo paciente (Elena Rostova)
    expect(screen.getByText('Elena Rostova')).toBeInTheDocument()
    expect(screen.getByText('13.456.789-0')).toBeInTheDocument()

    // Validar los datos del tercer paciente (Camila Rojas)
    expect(screen.getByText('Camila Rojas')).toBeInTheDocument()
    expect(screen.getByText('Salud Digestiva')).toBeInTheDocument()

    // Validar que cada fila tenga su botón de acción "Ver"
    const botonesVer = screen.getAllByRole('button', { name: /ver/i })
    expect(botonesVer).toHaveLength(3) // Deben haber exactamente 3 botones por los 3 registros
  })
})
