import { AppContext } from '@/context/AppContext/AppContext'
import {
  MOCKED_CONTEXT_DATA,
  MOCKED_CONTEXT_DATA_NO_PRODUCTS,
  MOCKED_CONTEXT_DATA_TWO_PRODUCTS
} from '@/mocks/contextData'
import { IAppContext } from '@/types'
import { render, screen } from '@testing-library/react'
import { Costs } from '../Costs'

const renderCosts = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <Costs />
    </AppContext.Provider>
  )

describe('Costs...', () => {
  test('renders correctly', () => {
    renderCosts(MOCKED_CONTEXT_DATA)

    const subtotalLabel = screen.getByText(/subtotal/i)
    expect(subtotalLabel).toBeInTheDocument()

    const shippingLabel = screen.getByText(/shipping/i)
    expect(shippingLabel).toBeInTheDocument()

    const totalLabel = screen.getByText(/^total$/i)
    expect(totalLabel).toBeInTheDocument()
  })

  test('subtotal and total prices should be 0 with no products', () => {
    renderCosts(MOCKED_CONTEXT_DATA_NO_PRODUCTS)

    const prices = screen.getAllByText(/0/i)
    expect(prices).toHaveLength(2)
  })

  test('subtotal and total prices should be equal to sum of product prices', () => {
    renderCosts(MOCKED_CONTEXT_DATA_TWO_PRODUCTS)

    const summaryPrices = screen.getAllByText(
      `$${MOCKED_CONTEXT_DATA_TWO_PRODUCTS.subtotalPrice}`
    )
    expect(summaryPrices).toHaveLength(2)
  })

  test('shipping should have label on init render', () => {
    renderCosts(MOCKED_CONTEXT_DATA_TWO_PRODUCTS)

    const shippingLabel = screen.getByText(/Calculated at the next step/i)
    expect(shippingLabel).toBeInTheDocument()
  })
})
