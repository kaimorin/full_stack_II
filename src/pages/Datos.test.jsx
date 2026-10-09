import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router'
import userEvent from '@testing-library/user-event'
import Datos from './Datos.jsx'

// Mock de react-router para capturar la función navigate
vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Datos', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    sessionStorage.clear()
  })

  it('renderiza la barra de pasos y todos los campos del formulario', () => {
    render(
      <MemoryRouter>
        <Datos />
      </MemoryRouter>
    )

    // Validar pasos
    const pasoActivo = screen.getByText('1. Datos Personales')
    expect(pasoActivo).toBeInTheDocument()
    expect(pasoActivo).toHaveClass('paso-activo')
    expect(screen.getByText('2. Doctor y Especialidad')).toBeInTheDocument()

    // Validar inputs por sus placeholders
    expect(screen.getByPlaceholderText('Nombre*')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Apellido*')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('RUT')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Ciudad*')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Patologias')).toBeInTheDocument()

    // Validar select y radios
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /para mí/i })).toBeChecked()

    // Validar botones de acción
    expect(screen.getByRole('button', { name: /siguiente/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /volver/i })).toHaveAttribute('href', '/')
  })

  it('guarda los datos del formulario en sessionStorage y navega al siguiente paso al enviar', async () => {
    render(
      <MemoryRouter>
        <Datos />
      </MemoryRouter>
    )

    // Rellenamos los campos obligatorios del formulario
    await userEvent.type(screen.getByPlaceholderText('Nombre*'), 'Diego')
    await userEvent.type(screen.getByPlaceholderText('Apellido*'), 'Anabalón')
    await userEvent.type(screen.getByPlaceholderText('RUT'), '18475920-3')
    await userEvent.selectOptions(screen.getByRole('combobox'), 'providencia')
    await userEvent.type(screen.getByPlaceholderText('Ciudad*'), 'Santiago')

    // Enviamos el formulario haciendo click en "Siguiente"
    await userEvent.click(screen.getByRole('button', { name: /siguiente/i }))

    // Comprobamos que los datos se hayan estructurado y guardado en el sessionStorage
    const datosGuardados = JSON.parse(sessionStorage.getItem('datosPaciente'))
    expect(datosGuardados).toEqual({
      nombre: 'Diego',
      apellido: 'Anabalón',
      rut: '18475920-3',
      telefono: '+56 9',
      comuna: 'providencia',
      ciudad: 'Santiago',
      patologias: '',
      destinatario: 'para-mi'
    })

    // Comprobamos que haya llamado a la ruta correcta de la agenda
    expect(mockNavigate).toHaveBeenCalledWith('/reserva/agenda')
  })
})
