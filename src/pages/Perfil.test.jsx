import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Perfil from './Perfil.jsx'

describe('Perfil', () => {
  it('renderiza correctamente el sidebar de navegación de la cuenta', () => {
    render(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    )

  
    expect(screen.getByRole('link', { name: /mi cuenta/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /mis solicitudes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tratamientos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cerrar sesion/i })).toBeInTheDocument()
  })

  it('muestra la información del panel de usuario de Kanye', () => {
    render(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    )

    
    expect(screen.getByRole('heading', { name: /bienvenido kanye/i, level: 1 })).toBeInTheDocument()

    
    expect(screen.getByText('Yezzus@yeezy.la')).toBeInTheDocument()
    expect(screen.getByText('Kanye West')).toBeInTheDocument()
    expect(screen.getByText('Avenida Libertadores 2038')).toBeInTheDocument()
    expect(screen.getByText(/Tel: \+56 9 34918234/i)).toBeInTheDocument()
  })

  it('renderiza la tabla de solicitudes con sus respectivos datos', () => {
    render(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    )

   
    expect(screen.getByRole('columnheader', { name: /citas/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /estado/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeInTheDocument()

  
    expect(screen.getByText('Control de Peso')).toBeInTheDocument()
    expect(screen.getByText('CJ39842-1311')).toBeInTheDocument()

    expect(screen.getByText('Curso de Ayuno')).toBeInTheDocument()
    expect(screen.getByText('BK90143-0310')).toBeInTheDocument()

    expect(screen.getByText('Curso de Dieta del agua')).toBeInTheDocument()
    expect(screen.getByText('VE27839-2310')).toBeInTheDocument()

    // Validar el input de búsqueda y el botón del panel
    expect(screen.getByPlaceholderText('Buscar por :ID')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /editar/i })).toBeInTheDocument()
  })
})
