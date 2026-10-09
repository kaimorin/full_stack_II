import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router' 
import userEvent from '@testing-library/user-event'
import Registro from './Registro.jsx'

describe('Registro', () => {
  it('muestra los campos obligatorios para registrar un nuevo paciente', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    )
    expect(screen.getByLabelText(/nombre:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rut:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^contraseña:$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/repetir contraseña:/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /registrarme/i })).toBeInTheDocument()
  })

  it('permite ingresar datos de registro', async () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    )
    const inputNombre = screen.getByLabelText(/nombre:/i)
    const inputRut = screen.getByLabelText(/rut:/i)

    await userEvent.type(inputNombre, 'Matias Cabezas')
    await userEvent.type(inputRut, '19876543-2')

    expect(inputNombre).toHaveValue('Matias Cabezas')
    expect(inputRut).toHaveValue('19876543-2')
  })

  it('permite ingresar la contraseña y repetir la contraseña correctamente', async () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    )
    const inputClave = screen.getByLabelText(/^contraseña:$/i)
    const inputRepetirClave = screen.getByLabelText(/repetir contraseña:/i)

    await userEvent.type(inputClave, 'MiClaveSegura123')
    await userEvent.type(inputRepetirClave, 'MiClaveSegura123')

    expect(inputClave).toHaveValue('MiClaveSegura123')
    expect(inputRepetirClave).toHaveValue('MiClaveSegura123')
  })

  it('renderiza correctamente los enlaces del pie del formulario', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    )
    const linkTerminos = screen.getByRole('link', { name: /terminos y condiciones/i })
    expect(linkTerminos).toBeInTheDocument()
    expect(screen.getByText(/ya tienes una cuenta\?/i)).toBeInTheDocument()

    const linkLogin = screen.getByRole('link', { name: /aquí/i })
    expect(linkLogin).toBeInTheDocument()
    expect(linkLogin).toHaveAttribute('href', '/login')
  })

  
  it('permite hacer click en el botón de continuar con Google', async () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    )
    const botonGoogle = screen.getByRole('button', { name: /Continuar con Google/i })
    await userEvent.click(botonGoogle)
    expect(botonGoogle).toBeInTheDocument()
  })
})
