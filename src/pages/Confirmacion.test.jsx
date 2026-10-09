import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Confirmacion from './Confirmacion.jsx'

describe('Confirmacion', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  it('renderiza el mensaje de éxito, recomendaciones y botón de volver', () => {
    render(
      <MemoryRouter>
        <Confirmacion />
      </MemoryRouter>
    )

    // Validar encabezados y textos principales
    expect(screen.getByText('NUTRIVIDA')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /¡has agendado tu cita con éxito!/i, level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /recomendaciones para tu visita:/i, level: 3 })).toBeInTheDocument()

    // Validar la existencia de las listas de recomendaciones
    expect(screen.getByText(/llegar con unos 10 minutos de anticipación/i)).toBeInTheDocument()
    expect(screen.getByText(/si cuentas con exámenes de sangre recientes/i)).toBeInTheDocument()

    // Validar el botón de retorno a la página principal
    const botonInicio = screen.getByRole('link', { name: /volver al inicio/i })
    expect(botonInicio).toBeInTheDocument()
    expect(botonInicio).toHaveAttribute('href', '/')
  })

  it('muestra los valores por defecto cuando no hay ninguna cita en sessionStorage', () => {
    render(
      <MemoryRouter>
        <Confirmacion />
      </MemoryRouter>
    )

    // Al no haber datos en sessionStorage, debe renderizar los textos fallback
    expect(screen.getByText('Dra. Maria de Judas')).toBeInTheDocument()
    expect(screen.getByText('Fecha por confirmar')).toBeInTheDocument()
    expect(screen.getByText('Hora por confirmar')).toBeInTheDocument()
    
    // Al estar vacía la especialidad por defecto, no debe renderizar ese elemento de la lista
    expect(screen.queryByText(/especialidad:/i)).not.toBeInTheDocument()
  })

  it('muestra correctamente los detalles de una cita recuperada desde sessionStorage', () => {
    const mockCita = {
      doctor: 'Dr. Maximo Tul´Onazo',
      especialidad: 'Nutrición Deportiva',
      fecha: '25 de Marzo, 2026',
      hora: '15:30 PM'
    }
    
    // Guardamos la cita ficticia en el almacenamiento de la sesión
    sessionStorage.setItem('cita', JSON.stringify(mockCita))

    render(
      <MemoryRouter>
        <Confirmacion />
      </MemoryRouter>
    )

    // El componente debe parsear y renderizar los datos guardados en el almacenamiento
    expect(screen.getByText('Dr. Maximo Tul´Onazo')).toBeInTheDocument()
    expect(screen.getByText('Nutrición Deportiva')).toBeInTheDocument()
    expect(screen.getByText('25 de Marzo, 2026')).toBeInTheDocument()
    expect(screen.getByText('15:30 PM')).toBeInTheDocument()
  })
})
