import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Reportes from './Reportes.jsx'

describe('Reportes', () => {
  it('renderiza la cabecera con el título y la descripción correctas', () => {
    render(<Reportes />)

    // Validar encabezado principal
    expect(screen.getByRole('heading', { name: /reportes y pagos/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Resumen de ingresos y pagos')).toBeInTheDocument()
  })

  it('muestra las tarjetas de métricas con sus valores correctos', () => {
    render(<Reportes />)

    // Validar bloques de analíticas financieras y de transacciones
    expect(screen.getByText('Ingresos del Mes')).toBeInTheDocument()
    expect(screen.getByText('$1,450,000')).toBeInTheDocument()

    expect(screen.getByText('Pagos Realizados')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()

    expect(screen.getByText('Pendientes de Pago')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renderiza la tabla y evalúa las clases condicionales de los estados de pago', () => {
    render(<Reportes />)

    // Validar encabezados de la estructura tabular
    expect(screen.getByRole('columnheader', { name: /paciente/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /servicio/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /monto/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /estado/i })).toBeInTheDocument()

    // Validar filas de datos mapeados del arreglo
    expect(screen.getByText('Lucas Gómez')).toBeInTheDocument()
    expect(screen.getByText('Control de Peso')).toBeInTheDocument()
    expect(screen.getByText('$41,650')).toBeInTheDocument()

    // Evaluar la rama condicional: 'Pagado' (badge badge-finalizado)
    const badgePagado = screen.getAllByText('Pagado')[0]
    expect(badgePagado).toBeInTheDocument()
    expect(badgePagado).toHaveClass('badge', 'badge-finalizado')

    // Evaluar la rama condicional: 'Pendiente' (badge badge-pendiente)
    expect(screen.getByText('Elena Rostova')).toBeInTheDocument()
    const badgePendiente = screen.getByText('Pendiente')
    expect(badgePendiente).toBeInTheDocument()
    expect(badgePendiente).toHaveClass('badge', 'badge-pendiente')

    expect(screen.getByText('Camila Rojas')).toBeInTheDocument()
    expect(screen.getByText('$37,820')).toBeInTheDocument()
  })
})
