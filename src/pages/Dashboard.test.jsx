import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dashboard from './Dashboard.jsx'

describe('Dashboard', () => {
  it('renderiza la cabecera de bienvenida y el cuadro de búsqueda', () => {
    render(<Dashboard />)

    // Validar título y subtítulo del panel general
    expect(screen.getByRole('heading', { name: /panel general/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Bienvenido de vuelta, Dr. Administrador')).toBeInTheDocument()

    // Validar campo de búsqueda
    expect(screen.getByPlaceholderText('Buscar paciente, RUT o ID...')).toBeInTheDocument()
  })

  it('permite ingresar texto en la barra de búsqueda del panel', async () => {
    render(<Dashboard />)

    const buscador = screen.getByPlaceholderText('Buscar paciente, RUT o ID...')
    await userEvent.type(buscador, 'Kanye')
    
    expect(buscador).toHaveValue('Kanye')
  })

  it('muestra las tarjetas de métricas con sus valores correctos', () => {
    render(<Dashboard />)

    // Validar las etiquetas e información financiera / estadística
    expect(screen.getByText('Citas de Hoy')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()

    expect(screen.getByText('Pacientes Activos')).toBeInTheDocument()
    expect(screen.getByText('1,240')).toBeInTheDocument()

    expect(screen.getByText('Ingresos del Mes')).toBeInTheDocument()
    expect(screen.getByText('$1,450,000')).toBeInTheDocument()

    expect(screen.getByText('Pendientes de Pago')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renderiza la tabla de próximas citas médicas con sus respectivas filas', async () => {
    render(<Dashboard />)

    // Validar título secundario y botón de acción
    expect(screen.getByRole('heading', { name: /próximas citas médicas/i, level: 2 })).toBeInTheDocument()
    const botonNuevaCita = screen.getByRole('button', { name: /\+ nueva cita/i })
    expect(botonNuevaCita).toBeInTheDocument()
    await userEvent.click(botonNuevaCita)

    // Validar encabezados clave de la tabla
    expect(screen.getByRole('columnheader', { name: /paciente/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /especialista/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /fecha y hora/i })).toBeInTheDocument()

    // Validar datos de los pacientes en las filas hardcodeadas
    expect(screen.getByText('Kanye West')).toBeInTheDocument()
    expect(screen.getByText('Confirmado')).toBeInTheDocument()

    expect(screen.getByText('Elena Rostova')).toBeInTheDocument()
    expect(screen.getByText('Pendiente')).toBeInTheDocument()

    expect(screen.getByText('Lucas Gómez')).toBeInTheDocument()
    expect(screen.getByText('Atendido')).toBeInTheDocument()

    // Validar los botones de acción individuales para cada fila
    const botonesVer = screen.getAllByRole('button', { name: /^ver$/i })
    expect(botonesVer).toHaveLength(3)
  })
})
