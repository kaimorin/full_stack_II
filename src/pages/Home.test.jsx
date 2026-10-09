import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter} from 'react-router'
import userEvent from '@testing-library/user-event'
import Home from './Home.jsx'

// Mock de scrollIntoView que no está implementado de forma nativa en jsdom
beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

describe('Home', () => {
  it('renderiza la sección principal hero, servicios y sobre nosotros correctamente', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    // Validar elementos del Hero
    expect(screen.getByRole('heading', { name: /tu salud es primero/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Clinica Nutrivida')).toBeInTheDocument()

    // Validar títulos de secciones
    expect(screen.getByRole('heading', { name: /servicios nutricionales/i, level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /sobre nosotros/i, level: 2 })).toBeInTheDocument()

    // Validar tarjetas de servicios
    expect(screen.getByText('Control de peso')).toBeInTheDocument()
    expect(screen.getByText('Nutricion infantil')).toBeInTheDocument()
    expect(screen.getByText('Nutricion Deportiva')).toBeInTheDocument()
    
    const enlacesDetalles = screen.getAllByRole('link', { name: /detalles/i })
    expect(enlacesDetalles.length).toBe(3)
  })

  it('renderiza las tarjetas de los profesionales de la salud con el carrusel', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    // Validar nombres de los doctores
    expect(screen.getByRole('heading', { name: 'Maria De Judas', level: 4 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Maximo Tul´Onazo', level: 4 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Kanye Di West', level: 4 })).toBeInTheDocument()

    // Validar botones de control del carrusel
    expect(screen.getByRole('button', { name: '‹' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '›' })).toBeInTheDocument()
  })

  it('ejecuta la función de scroll suave al hacer click en los botones de anclaje internos', async () => {
    // Creamos elementos ficticios en el DOM con los IDs que busca el componente para poder seleccionarlos
    const divProfesionales = document.createElement('div')
    divProfesionales.id = 'profesionales'
    document.body.appendChild(divProfesionales)

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const enlaceProfesionales = screen.getByRole('link', { name: /profesionales/i })
    
    // Simula click en el botón de la sección hero
    await userEvent.click(enlaceProfesionales)

    // Comprueba que se haya llamado la API nativa de scroll por medio de la función irA
    expect(divProfesionales.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    
    document.body.removeChild(divProfesionales)
  })

  it('ejecuta el useEffect de scroll automático si la ruta trae un estado de destino', () => {
    const divServicios = document.createElement('div')
    divServicios.id = 'servicios'
    document.body.appendChild(divServicios)

    // Inicializamos el MemoryRouter simulando un estado previo (location.state.ir = 'servicios')
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', state: { ir: 'servicios' } }]}>
        <Home />
      </MemoryRouter>
    )

    // El useEffect debe interceptar el state y ejecutar el desplazamiento automático
    expect(divServicios.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })

    document.body.removeChild(divServicios)
  })
})
