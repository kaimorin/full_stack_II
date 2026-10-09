import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import Pago from './Pago.jsx'

describe('Pago', () => {
  it('renderiza la barra de pasos de la agenda correctamente', () => {
    render(
      <MemoryRouter>
        <Pago />
      </MemoryRouter>
    )

    expect(screen.getByText('1. Datos Personales')).toBeInTheDocument()
    expect(screen.getByText('2. Doctor y Especialidad')).toBeInTheDocument()
    
    const pasoActivo = screen.getByText('3. Pago y Facturacion')
    expect(pasoActivo).toBeInTheDocument()
    expect(pasoActivo).toHaveClass('paso-activo')
  })

  it('permite interactuar y seleccionar los métodos de pago Webpay o Mercado Pago', async () => {
    render(
      <MemoryRouter>
        <Pago />
      </MemoryRouter>
    )

   
    const radioWebpay = screen.getByRole('radio', { name: /webpay/i })
    const radioMercadoPago = screen.getByRole('radio', { name: /mercado pago/i })

    expect(radioWebpay).toBeChecked()
    expect(radioMercadoPago).not.toBeChecked()


    await userEvent.click(radioMercadoPago)

    expect(radioWebpay).not.toBeChecked()
    expect(radioMercadoPago).toBeChecked()
  })

  it('muestra el desglose del resumen de compra y totales', () => {
    render(
      <MemoryRouter>
        <Pago />
      </MemoryRouter>
    )

  
    expect(screen.getByText('CITA PARA BAJAR GRASA CORPORAL ADULTO')).toBeInTheDocument()
    expect(screen.getByText('DRA MARIA D.J')).toBeInTheDocument()

  
    expect(screen.getByText('SUBTOTAL')).toBeInTheDocument()
    expect(screen.getByText('I.V.A')).toBeInTheDocument()
    expect(screen.getByText('$6,650')).toBeInTheDocument()
    
    
    const bloquesTotal = screen.getAllByText('$41,650')
    expect(bloquesTotal.length).toBeGreaterThan(0)
  })

  it('permite desplegar el cupón de descuento y escribir en él', async () => {
    render(
      <MemoryRouter>
        <Pago />
      </MemoryRouter>
    )

   
    expect(screen.getByText('TIENES UN CUPÓN?')).toBeInTheDocument()

    const inputCupon = screen.getByPlaceholderText('Ingresa cupón')
    const botonAplicar = screen.getByRole('button', { name: /aplicar/i })

    expect(inputCupon).toBeInTheDocument()
    expect(botonAplicar).toBeInTheDocument()

   
    await userEvent.type(inputCupon, 'NUTRIVIDA2026')
    expect(inputCupon).toHaveValue('NUTRIVIDA2026')
    
    await userEvent.click(botonAplicar)
  })

  it('contiene los botones de navegación con sus rutas correctas', () => {
    render(
      <MemoryRouter>
        <Pago />
      </MemoryRouter>
    )

    const botonPagar = screen.getByRole('link', { name: /pagar/i })
    const botonVolver = screen.getByRole('link', { name: /volver/i })

    expect(botonPagar).toBeInTheDocument()
    expect(botonPagar).toHaveAttribute('href', '/reserva/confirmacion')

    expect(botonVolver).toBeInTheDocument()
    expect(botonVolver).toHaveAttribute('href', '/reserva/agenda')
  })
})
