import { test, expect } from '@playwright/test'

// Prueba end-to-end (Playwright): abre la app compilada en un navegador real
// y la recorre como lo haría un usuario.
test('la página de inicio carga con el título de Nutrivida', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Nutrivida')
  await expect(page.getByRole('heading', { name: 'Tu Salud es Primero' })).toBeVisible()
})
