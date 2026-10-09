import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CitasHorario from './CitasHorario.jsx'

describe('CitasHorario', () => {
  it('renderiza la barra superior de administración correctamente', () => {
    render(<CitasHorario />)

    expect(screen.getByRole('heading', { name: /^citas y horarios$/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Agenda de todas las citas')).toBeInTheDocument()
  })

  it('muestra el encabezado de citas y permite interactuar con el botón de creación', async () => {
    render(<CitasHorario />)

    expect(screen.getByRole('heading', { name: /^citas$/i, level: 2 })).toBeInTheDocument()
    
    const botonNuevaCita = screen.getByRole('button', { name: /\+ nueva cita/i })
    expect(botonNuevaCita).toBeInTheDocument()

    await userEvent.click(botonNuevaCita)
  })

  it('renderiza la estructura de la tabla y mapea las citas existentes con sus estados', () => {
    render(<CitasHorario />)

    expect(screen.getByRole('columnheader', { name: /paciente/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /especialista/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /fecha y hora/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /estado/i })).toBeInTheDocument()

    // Validar primera fila (Lucas Gómez)
    expect(screen.getByText('Lucas Gómez')).toBeInTheDocument()
    expect(screen.getByText('19 Feb - 09:30 AM')).toBeInTheDocument()
    expect(screen.getByText('Confirmado')).toBeInTheDocument()

    // Validar segunda fila (Elena Rostova)
    expect(screen.getByText('Elena Rostova')).toBeInTheDocument()
    expect(screen.getByText('Dr. Maximo Tul´Onazo')).toBeInTheDocument()
    expect(screen.getByText('19 Feb - 10:15 AM')).toBeInTheDocument()
    expect(screen.getByText('Pendiente')).toBeInTheDocument()

    // Validar tercera fila (Camila Rojas)
    expect(screen.getByText('Camila Rojas')).toBeInTheDocument()
    expect(screen.getByText('19 Feb - 11:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Atendido')).toBeInTheDocument()

    // Validamos que existan las dos apariciones de la Dra. Maria de Judas
    const doctoresMaria = screen.getAllByText('Dra. Maria de Judas')
    expect(doctoresMaria.length).toBe(2)
    expect(doctoresMaria[0]).toBeInTheDocument()
  })
})
