import { test, expect } from '@playwright/test'

/*
These tests are base on the fact that the api return the defaul data as in @/src/compontetn/_tests_/mocks.ts - all
*/
test('Loads correctly 3 widgets from the api', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const responsePromise = page.waitForResponse('https://api.mocki.io/v2/016d11e8/product-widgets')
  await responsePromise
  await page.locator('css=div.card').first().waitFor()
  const count = await page.locator('css=div.card').count()

  expect(count).toBe(3)
})

test('Sets correct card head color', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const responsePromise = page.waitForResponse('https://api.mocki.io/v2/016d11e8/product-widgets')
  await responsePromise

  const cardHead = page.locator('div#card_head_1').first()
  const card = cardHead.locator('..')
  await card.locator('button.bg-beige').click()
  console.log('cardHead', card)
  await expect(cardHead).toHaveClass(/bg-beige/)
  await expect(card).toHaveClass(/text-green/)
})

/*
Based on the fact that the api returns the first widget with selectedColor = green
*/
test('Sets correct card head color', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const responsePromise = page.waitForResponse('https://api.mocki.io/v2/016d11e8/product-widgets')
  await responsePromise

  const cardHead = page.locator('div#card_head_1').first()
  const card = cardHead.locator('..')
  await card.locator('button.bg-beige').click()

  await expect(cardHead).toHaveClass(/bg-beige/)
  await expect(card).toHaveClass(/text-green/)
})

/*
Based on the fact that the api returns the first widget with an active status
*/
test('Sets one active status at a time', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const responsePromise = page.waitForResponse('https://api.mocki.io/v2/016d11e8/product-widgets')
  await responsePromise

  await page.locator('input#input_active_2').dispatchEvent('click')
  expect(await page.isChecked('input#input_active_1')).toBeFalsy()
  expect(await page.isChecked('input#input_active_2')).toBeTruthy()
  expect(await page.isChecked('input#input_active_3')).toBeFalsy()
})
