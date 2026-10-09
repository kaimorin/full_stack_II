import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import LayoutAdmin from './LayoutAdmin.jsx'

describe('LayoutAdmin', () => {
  it('renderiza la barra lateral AdminLeader y el contenido dinámico del Outlet correctamente', () => {
    // Configuramos un enrutador de prueba para simular cómo se inyectan las subrutas del panel
    const routerFicticio = createMemoryRouter(
      [
        {
          path: '/admin',
          element: <LayoutAdmin />,
          children: [
            {
              index: true,
              element: <div data-testid="vista-admin-hija">Vista interna del Dashboard</div>,
            },
          ],
        },
      ],
      { initialEntries: ['/admin'] }
    )

    render(<RouterProvider router={routerFicticio} />)

    // Validar que el AdminLeader esté presente (logotipo del panel)
    expect(screen.getByRole('link', { name: 'NUTRIVIDA' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument()

    // Validar que el Outlet inyecte el contenido de la subruta administrativa actual
    expect(screen.getByTestId('vista-admin-hija')).toBeInTheDocument()
    expect(screen.getByText('Vista interna del Dashboard')).toBeInTheDocument()
  })
})
