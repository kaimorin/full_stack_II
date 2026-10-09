import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Especialistas from './Especialistas.jsx'

describe('Especialistas', () => {
  it('renderiza la cabecera del panel de administración correctamente', () => {
    render(<Especialistas />)

    expect(screen.getByRole('heading', { name: /^especialistas$/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Equipo de profesionales')).toBeInTheDocument()
  })

  it('muestra el botón para agregar un nuevo especialista y permite interactuar', async () => {
    render(<Especialistas />)

    expect(screen.getByRole('heading', { name: /^equipo$/i, level: 2 })).toBeInTheDocument()
    
    const botonNuevo = screen.getByRole('button', { name: /\+ nuevo especialista/i })
    expect(botonNuevo).toBeInTheDocument()

    await userEvent.click(botonNuevo)
  })

  it('renderiza la tabla con las columnas correctas y el listado de profesionales', () => {
    render(<Especialistas />)

    expect(screen.getByRole('columnheader', { name: /nombre/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /especialidad/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /modalidad/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /acciones/i })).toBeInTheDocument()

    // Validar datos de los especialistas
    expect(screen.getByText('Maria de Judas')).toBeInTheDocument()
    expect(screen.getByText('Nutrición Clínica')).toBeInTheDocument()

    expect(screen.getByText('Maximo Tul´Onazo')).toBeInTheDocument()
    expect(screen.getByText('Nutrición Deportiva')).toBeInTheDocument()
    expect(screen.getByText('Presencial')).toBeInTheDocument()

    //  Validamos las dos apariciones de "Presencial y Online"
    const modalidadesMixtas = screen.getAllByText('Presencial y Online')
    expect(modalidadesMixtas.length).toBe(2)

    expect(screen.getByText('Mario Di West')).toBeInTheDocument()
    expect(screen.getByText('Control de Peso')).toBeInTheDocument()
    expect(screen.getByText('Online')).toBeInTheDocument()

    expect(screen.getByText('Shaqueal O´neal')).toBeInTheDocument()
    expect(screen.getByText('Salud Digestiva')).toBeInTheDocument()

    const botonesVer = screen.getAllByRole('button', { name: /^ver$/i })
    expect(botonesVer).toHaveLength(4)
  })
})
