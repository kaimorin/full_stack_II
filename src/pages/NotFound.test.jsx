import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound.jsx'

// Prueba unitaria (Vitest + Testing Library): renderiza un componente aislado
// en un DOM simulado (jsdom) y verifica lo que vería el usuario.
describe('NotFound', () => {
  it('muestra el código 404 y el mensaje de página no encontrada', () => {
    render(<NotFound />)

    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
    expect(screen.getByText('Página no encontrada')).toBeInTheDocument()
  })
})
