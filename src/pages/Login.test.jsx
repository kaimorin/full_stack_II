import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import Login from './Login.jsx'

describe('Login', () => {
  it('renderiza el formulario de inicio de sesión correctamente', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    expect(screen.getByLabelText(/Correo Electronico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ingresar\.\.\./i })).toBeInTheDocument()
  })

  it('permite escribir credenciales en los campos', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const inputCorreo = screen.getByLabelText(/Correo Electronico/i)
    const inputContraseña = screen.getByLabelText(/Contraseña/i)

    await userEvent.type(inputCorreo, 'marisol@gmail.com')
    await userEvent.type(inputContraseña, 'password123')

    expect(inputCorreo).toHaveValue('marisol@gmail.com')
    expect(inputContraseña).toHaveValue('password123')
  })


  it('permite hacer click en el botón de iniciar sesión con Google', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const botonGoogle = screen.getByRole('button', { name: /Inicia Sesion con Google/i })
    await userEvent.click(botonGoogle)
    expect(botonGoogle).toBeInTheDocument()
  })
})
