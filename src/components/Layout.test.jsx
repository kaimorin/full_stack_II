import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'

describe('Layout', () => {
  it('renderiza el Header, el Footer y el contenido dinámico del Outlet correctamente', () => {
    // Creamos una configuración de rutas de prueba para simular el comportamiento del Outlet
    const routerFicticio = createMemoryRouter(
      [
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              index: true,
              element: <div data-testid="contenido-hijo">Contenido de la Subruta</div>,
            },
          ],
        },
      ],
      { initialEntries: ['/'] }
    )

    render(<RouterProvider router={routerFicticio} />)

    // Validar que el Header se esté renderizando en el Layout (marca principal)
    expect(screen.getByRole('link', { name: 'NUTRIVIDA' })).toBeInTheDocument()

    // Validar que el Outlet inyecte el contenido dinámico de la subruta de forma correcta
    expect(screen.getByTestId('contenido-hijo')).toBeInTheDocument()
    expect(screen.getByText('Contenido de la Subruta')).toBeInTheDocument()

    // Validar que el Footer se esté renderizando en el Layout (sección legal)
    expect(screen.getByText('Todos los derechos reservados.')).toBeInTheDocument()
  })
})
