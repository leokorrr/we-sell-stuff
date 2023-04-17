import { AppContext } from '@/context/AppContext/AppContext'
import {
  MOCKED_CONTEXT_DATA,
  MOCKED_CONTEXT_DATA_NO_PRODUCTS,
  MOCKED_CONTEXT_DATA_QUANTITY,
  MOCKED_CONTEXT_DATA_TWO_PRODUCTS
} from '@/mocks/contextData'
import { IAppContext } from '@/types'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import { CartPopup } from '../CartPopup'

jest.mock('next/router', () => require('next-router-mock'))

const renderCartPopup = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <CartPopup />
    </AppContext.Provider>
  )

const rerenderCartPopup = (
  contextValue: IAppContext,
  rerender: (ui: React.ReactElement) => void
) =>
  rerender(
    <AppContext.Provider value={contextValue}>
      <CartPopup />
    </AppContext.Provider>
  )

describe('CartPopup...', () => {
  test('renders correctly', () => {
    renderCartPopup(MOCKED_CONTEXT_DATA)

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })
    expect(cartIcon).toBeInTheDocument()
  })

  test('should not be visible initially', () => {
    renderCartPopup(MOCKED_CONTEXT_DATA)

    const popupHeader = screen.queryByRole('heading', {
      name: /your cart:/i
    })
    expect(popupHeader).not.toBeInTheDocument()
  })

  test('should become visible after click on trigger', async () => {
    userEvent.setup()

    renderCartPopup(MOCKED_CONTEXT_DATA)

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })

    await act(async () => await userEvent.click(cartIcon))

    const cartHeader = screen.getByRole('heading', {
      name: /your cart:/i
    })
    expect(cartHeader).toBeInTheDocument()

    const subtotalLabel = screen.getByText(/subtotal/i)
    expect(subtotalLabel).toBeInTheDocument()

    const shippingLabel = screen.getByText(/shipping/i)
    expect(shippingLabel).toBeInTheDocument()

    const totalLabel = screen.getByText(/^total$/i)
    expect(totalLabel).toBeInTheDocument()

    const goToCartButton = screen.getByRole('button', {
      name: /go to cart/i
    })
    expect(goToCartButton).toBeInTheDocument()
  })

  test('should disappear after second click on trigger', async () => {
    userEvent.setup()

    renderCartPopup(MOCKED_CONTEXT_DATA)

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })

    await act(async () => await userEvent.click(cartIcon))
    await act(async () => await userEvent.click(cartIcon))

    const cartHeader = screen.queryByRole('heading', {
      name: /your cart:/i
    })
    expect(cartHeader).not.toBeInTheDocument()
  })

  test('should not display items amount if no products', () => {
    renderCartPopup(MOCKED_CONTEXT_DATA_NO_PRODUCTS)

    const itemsAmount = screen.queryByTestId(/items-count/i)
    expect(itemsAmount).not.toBeInTheDocument()
  })

  test('should display items amount equal to products amount', () => {
    renderCartPopup(MOCKED_CONTEXT_DATA)

    const itemsAmount = screen.getByText(/1/i)
    expect(itemsAmount).toBeInTheDocument()
  })

  test('should close after outside click', async () => {
    userEvent.setup()

    renderCartPopup(MOCKED_CONTEXT_DATA)

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })

    await act(async () => await userEvent.click(cartIcon))

    const cartHeader = screen.getByRole('heading', {
      name: /your cart:/i
    })
    expect(cartHeader).toBeInTheDocument()

    await act(async () => await userEvent.click(document.body))
    expect(cartHeader).not.toBeInTheDocument()
  })

  test('should remove item from cart and decrease count', async () => {
    userEvent.setup()

    const { rerender } = renderCartPopup(MOCKED_CONTEXT_DATA_TWO_PRODUCTS)

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })

    await act(async () => await userEvent.click(cartIcon))

    const removeButton = screen.getAllByText(/remove/i)[0]
    expect(removeButton).toBeInTheDocument()

    const itemsAmount = screen.getByTestId(/items-count/i)
    expect(itemsAmount).toHaveTextContent('2')

    await act(async () => await userEvent.click(removeButton))

    rerenderCartPopup(MOCKED_CONTEXT_DATA_TWO_PRODUCTS, rerender)

    const card = screen.getByRole('heading', {
      name: /natural honey bottle/i
    })
    expect(card).toBeInTheDocument()

    const itemsAmountDecreased = screen.getByTestId(/items-count/i)
    expect(itemsAmountDecreased).toHaveTextContent('1')
  })

  test('should decrease subtotal and total price on product remove', async () => {
    userEvent.setup()

    const { rerender } = renderCartPopup(MOCKED_CONTEXT_DATA_QUANTITY)

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })

    await act(async () => await userEvent.click(cartIcon))

    const removeButton = screen.getAllByText(/remove/i)[0]
    expect(removeButton).toBeInTheDocument()

    const prices = screen.getAllByText(/564/i)
    expect(prices).toHaveLength(2)

    await act(async () => await userEvent.click(removeButton))

    rerenderCartPopup(MOCKED_CONTEXT_DATA_QUANTITY, rerender)

    const pricesDecreased = screen.getAllByText(/376/i)
    expect(pricesDecreased).toHaveLength(2)
  })
})
