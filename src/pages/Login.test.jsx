import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login.jsx'

describe('Login', () => {
  it('renderiza el formulario de inicio de sesión correctamente', () => {
    render(<Login />)

    expect(screen.getByRole('heading', { name: /iniciar sesión|login|acceso/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/rut|correo|usuario/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contraseña|password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ingresar|entrar|iniciar/i })).toBeInTheDocument()
  })

  it('permite escribir credenciales en los campos', async () => {
    render(<Login />)

    const inputUsuario = screen.getByLabelText(/rut|correo|usuario/i)
    const inputPassword = screen.getByLabelText(/contraseña|password/i)

    await userEvent.type(inputUsuario, '12345678-9')
    await userEvent.type(inputPassword, '123456')

    expect(inputUsuario).toHaveValue('12345678-9')
    expect(inputPassword).toHaveValue('123456')
  })
})