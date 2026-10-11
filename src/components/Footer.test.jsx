import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Footer from './Footer.jsx'

describe('Footer', () => {
  it('renderiza los textos principales y el botón de agendamiento', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    // Validar encabezados y eslóganes del pie de página
    expect(screen.getByRole('heading', { name: /estas listo para el cambio\?/i, level: 3 })).toBeInTheDocument()
    expect(screen.getByText('Estamos preparados para empezar!!!')).toBeInTheDocument()

    // Validar el botón interno de agendamiento de citas
    const btnAgenda = screen.getByRole('link', { name: /agenda ahora/i })
    expect(btnAgenda).toBeInTheDocument()
    expect(btnAgenda).toHaveAttribute('href', '/reserva/datos')
  })

  it('renderiza correctamente los iconos y enlaces a las redes sociales con apertura en nueva pestaña', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    // Validar el bloque de contacto
    expect(screen.getByText('Contactanos...')).toBeInTheDocument()

    // Validar enlace e imagen de WhatsApp
    const linkWs = screen.getByRole('link', { name: /whatsapp/i })
    expect(linkWs).toBeInTheDocument()
    expect(linkWs).toHaveAttribute('href', 'https://wa.me/56912345678')
    expect(linkWs).toHaveAttribute('target', '_blank')
    expect(screen.getByAltText('WhatsApp')).toBeInTheDocument()

    // Validar enlace e imagen de Facebook
    const linkFb = screen.getByRole('link', { name: /facebook/i })
    expect(linkFb).toBeInTheDocument()
    expect(linkFb).toHaveAttribute('href', 'https://facebook.com')
    expect(linkFb).toHaveAttribute('target', '_blank')
    expect(screen.getByAltText('Facebook')).toBeInTheDocument()

    // Validar enlace e imagen de Instagram
    const linkIg = screen.getByRole('link', { name: /instagram/i })
    expect(linkIg).toBeInTheDocument()
    expect(linkIg).toHaveAttribute('href', 'https://instagram.com')
    expect(linkIg).toHaveAttribute('target', '_blank')
    expect(screen.getByAltText('Instagram')).toBeInTheDocument()
  })

  it('muestra la sección de avisos legales e información horaria', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    // Validar textos legales inferiores
    expect(screen.getByText('Todos los derechos reservados.')).toBeInTheDocument()
    expect(screen.getByText(/todos los dias de lunes a sabado de 10:30 am hasta las 5:30 pm/i)).toBeInTheDocument()
  })
})
