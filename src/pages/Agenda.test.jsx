import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router'
import userEvent from '@testing-library/user-event'
import Agenda from './Agenda.jsx'

// Mock de react-router para espiar la navegación entre pasos
vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Agenda', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    sessionStorage.clear()
  })

  it('renderiza la barra de pasos y las tarjetas informativas de los doctores', () => {
    render(
      <MemoryRouter>
        <Agenda />
      </MemoryRouter>
    )

    // Validar pasos del asistente de agendamiento
    const pasoActivo = screen.getByText('2. Doctor y Especialidad')
    expect(pasoActivo).toBeInTheDocument()
    expect(pasoActivo).toHaveClass('paso-activo')

    // Validar listado de especialistas médicos
    expect(screen.getByText('Maria de Judas')).toBeInTheDocument()
    expect(screen.getByText("Maximo Tul 'Onazzo")).toBeInTheDocument()
    expect(screen.getByText("Mario Di 'West")).toBeInTheDocument()
    expect(screen.getByText("Shaqueal O'neal")).toBeInTheDocument()

    // Validar selectores base
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /volver/i })).toHaveAttribute('href', '/reserva/datos')
  })

  it('permite cambiar la modalidad de atención médica y el especialista', async () => {
    render(
      <MemoryRouter>
        <Agenda />
      </MemoryRouter>
    )

    const radioPresencial = screen.getByRole('radio', { name: /presencial/i })
    const radioOnline = screen.getByRole('radio', { name: /online/i })

    expect(radioPresencial).toBeChecked()
    
    // Cambiar modalidad
    await userEvent.click(radioOnline)
    expect(radioOnline).toBeChecked()

    // Seleccionar otro doctor
    const radioMaximo = screen.getByRole('radio', { name: /maximo tul 'onazzo/i })
    await userEvent.click(radioMaximo)
    expect(radioMaximo).toBeChecked()
  })

  it('permite interactuar con los controles del widget de calendario y selectores de rueda', async () => {
    render(
      <MemoryRouter>
        <Agenda />
      </MemoryRouter>
    )

    // Simulamos interacción con los botones del mes en el calendario
    const botonesMes = screen.getAllByRole('button')
    const botonMesAnterior = botonesMes.find(b => b.textContent === '<')
    const botonMesSiguiente = botonesMes.find(b => b.textContent === '>')

    if (botonMesSiguiente) await userEvent.click(botonMesSiguiente)
    if (botonMesAnterior) await userEvent.click(botonMesAnterior)

    // Buscar y clickear el botón estático HOY del calendario
    const botonHoy = screen.getByRole('button', { name: /hoy/i })
    await userEvent.click(botonHoy)

    // Interactuar con la rueda horaria (Ejemplo: Cambiar a meridiano PM)
    const opcionPm = screen.getByText('PM')
    await userEvent.click(opcionPm)
    expect(opcionPm).toHaveClass('activa')
  })

  it('guarda la información de la cita en sessionStorage y redirige al envío exitoso', async () => {
    render(
      <MemoryRouter>
        <Agenda />
      </MemoryRouter>
    )

    // Completamos el campo obligatorio de especialidad en el formulario
    const selectEspecialidad = screen.getByRole('combobox')
    await userEvent.selectOptions(selectEspecialidad, 'nutricion-deportiva')

    // Enviamos el formulario gatillando la función de redirección
    const botonSiguiente = screen.getByRole('button', { name: /siguiente/i })
    await userEvent.click(botonSiguiente)

    // Validamos almacenamiento seguro local
    const citaGuardada = sessionStorage.getItem('cita')
    expect(citaGuardada).not.toBeNull()

    // Comprobamos la navegación hacia la pasarela de pagos
    expect(mockNavigate).toHaveBeenCalledWith('/reserva/pago')
  })
})
