import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import AdminLeader from './AdminLeader.jsx'

describe('AdminLeader', () => {
  it('renderiza el logotipo, los enlaces de navegación y el botón de cerrar sesión', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <AdminLeader />
      </MemoryRouter>
    )

    // Validar el logotipo con enlace al home de la aplicación
    const logoLink = screen.getByRole('link', { name: /nutrivida/i })
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')

    // Validar la presencia de todos los NavLinks informativos del menú
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /citas y horarios/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pacientes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /especialistas/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /reportes y pagos/i })).toBeInTheDocument()

    // Validar el botón de logout al login
    const logoutLink = screen.getByRole('link', { name: /cerrar sesión/i })
    expect(logoutLink).toBeInTheDocument()
    expect(logoutLink).toHaveAttribute('href', '/login')
  })

  it('aplica correctamente la clase "activo" al NavLink que coincide con la ruta actual', () => {
    render(
      // Simulamos que el administrador se encuentra navegando específicamente en la sección de pacientes
      <MemoryRouter initialEntries={['/admin/pacientes']}>
        <AdminLeader />
      </MemoryRouter>
    )

    const linkDashboard = screen.getByRole('link', { name: /dashboard/i })
    const linkPacientes = screen.getByRole('link', { name: /pacientes/i })

    // El link de Dashboard no debe estar activo
    expect(linkDashboard).toHaveClass('item-admin')
    expect(linkDashboard).not.toHaveClass('activo')

    // El link de Pacientes debe evaluar la función de clase reactiva y añadir los estilos activos
    expect(linkPacientes).toHaveClass('item-admin', 'activo')
  })
})
