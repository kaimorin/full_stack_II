import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router'
import userEvent from '@testing-library/user-event'
import Header from './Header.jsx'

// Mock de react-router para capturar y controlar la función navigate
vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Header', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  it('renderiza el logotipo, los enlaces de la barra de navegación y el botón de reserva', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )

    // Validar marca principal
    expect(screen.getByRole('link', { name: 'NUTRIVIDA' })).toBeInTheDocument()

    // Validar enlaces del menú
    expect(screen.getByRole('link', { name: 'Servicios' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Profesionales' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Mi Salud' })).toBeInTheDocument()

    // Validar botón destacado de agendamiento
    const btnAgenda = screen.getByRole('link', { name: 'Agenda ahora' })
    expect(btnAgenda).toBeInTheDocument()
    expect(btnAgenda).toHaveAttribute('href', '/reserva/datos')
  })

  it('ejecuta scroll suave si el usuario hace click en una sección estando en la página de inicio (/)', async () => {
    // Creamos un elemento simulado en el DOM con el ID correspondiente
    const seccionServicios = document.createElement('div')
    seccionServicios.id = 'servicios'
    document.body.appendChild(seccionServicios)

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )

    const enlaceServicios = screen.getByRole('link', { name: 'Servicios' })
    await userEvent.click(enlaceServicios)

    // Comprobamos que ejecute el scroll nativo sobre el div ficticio
    expect(seccionServicios.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })

    document.body.removeChild(seccionServicios)
  })

  it('redirige a la raíz compartiendo el ID de la sección en el estado si se clickea desde otra página', async () => {
    render(
      // Simulamos que el usuario se encuentra navegando dentro de la vista de registro
      <MemoryRouter initialEntries={['/registro']}>
        <Header />
      </MemoryRouter>
    )

    const enlaceProfesionales = screen.getByRole('link', { name: 'Profesionales' })
    await userEvent.click(enlaceProfesionales)

    // Debe saltar a la raíz inyectando el id del bloque al objeto state para que Home lo procese
    expect(mockNavigate).toHaveBeenCalledWith('/', { state: { ir: 'profesionales' } })
  })
})
