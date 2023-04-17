import { AppContext } from '@/context/AppContext/AppContext'
import { MOCKED_CONTEXT_DATA, MOCKED_CONTEXT_DATA_NO_PRODUCTS } from '@/mocks/contextData'
import CartPage from '@/pages/cart'
import { IAppContext } from '@/types'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => require('next-router-mock'))

const renderCartPage = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <CartPage />
    </AppContext.Provider>
  )

describe('CartPage...', () => {
  test('renders correctly', () => {
    renderCartPage(MOCKED_CONTEXT_DATA)

    const pageHeader = screen.getByRole('heading', {
      name: /your cart:/i
    })
    expect(pageHeader).toBeInTheDocument()
  })

  test('button should be disabled if no products in cart', () => {
    renderCartPage(MOCKED_CONTEXT_DATA_NO_PRODUCTS)

    const continueButton = screen.getByRole('button', {
      name: /continue to shipping/i
    })
    expect(continueButton).toBeInTheDocument()
    expect(continueButton).toBeDisabled()
  })

  test('button should NOT be disabled if there are products in cart', () => {
    renderCartPage(MOCKED_CONTEXT_DATA)

    const continueButton = screen.getByRole('button', {
      name: /continue to shipping/i
    })
    expect(continueButton).toBeInTheDocument()
    expect(continueButton).not.toBeDisabled()
  })
})
