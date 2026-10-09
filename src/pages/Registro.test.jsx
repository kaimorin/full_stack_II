import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Registro from './Registro.jsx'

describe('Registro', () => {
  it('muestra los campos obligatorios para registrar un nuevo paciente', () => {
    render(<Registro />)

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rut/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contraseña|password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /registrar|crear cuenta/i })).toBeInTheDocument()
  })

  it('permite ingresar datos de registro', async () => {
    render(<Registro />)

    const inputNombre = screen.getByLabelText(/nombre/i)
    const inputRut = screen.getByLabelText(/rut/i)

    await userEvent.type(inputNombre, 'Matias Cabezas')
    await userEvent.type(inputRut, '19876543-2')

    expect(inputNombre).toHaveValue('Matias Cabezas')
    expect(inputRut).toHaveValue('19876543-2')
  })
})