import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import LayoutReserva from './LayoutReserva.jsx'

describe('LayoutReserva', () => {
  it('renderiza el Header, el Footer y el contenido dinámico del flujo de reserva correctamente', () => {
    // Configuramos un enrutador de prueba para simular cómo se inyectan las subrutas del proceso de reserva
    const routerFicticio = createMemoryRouter(
      [
        {
          path: '/reserva',
          element: <LayoutReserva />,
          children: [
            {
              index: true,
              element: <div data-testid="vista-reserva-hija">Formulario o Paso de Reserva</div>,
            },
          ],
        },
      ],
      { initialEntries: ['/reserva'] }
    )

    render(<RouterProvider router={routerFicticio} />)

    // Validar que el Header se esté renderizando en el LayoutReserva (marca principal)
    expect(screen.getByRole('link', { name: 'NUTRIVIDA' })).toBeInTheDocument()

    // Validar que el Outlet inyecte el contenido dinámico del paso de reserva actual
    expect(screen.getByTestId('vista-reserva-hija')).toBeInTheDocument()
    expect(screen.getByText('Formulario o Paso de Reserva')).toBeInTheDocument()

    // Validar que el Footer se esté renderizando en el LayoutReserva (sección legal)
    expect(screen.getByText('Todos los derechos reservados.')).toBeInTheDocument()
  })
})
