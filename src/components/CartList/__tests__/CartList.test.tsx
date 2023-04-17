import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CartList } from '../CartList'
import {
  MOCKED_CONTEXT_DATA_NO_PRODUCTS,
  MOCKED_CONTEXT_DATA_TWO_PRODUCTS
} from '@/mocks/contextData'
import { AppContext } from '@/context/AppContext/AppContext'
import { IAppContext } from '@/types'

const renderCartList = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <CartList />
    </AppContext.Provider>
  )

describe('CartList...', () => {
  test('should render empty message if no products in cart', () => {
    renderCartList(MOCKED_CONTEXT_DATA_NO_PRODUCTS)

    const emptyText = screen.getByText(/the cart is empty\.\.\./i)
    expect(emptyText).toBeInTheDocument()
  })

  test('renders a list of items', () => {
    renderCartList(MOCKED_CONTEXT_DATA_TWO_PRODUCTS)

    const cartListElements = screen.getAllByTestId('cart-item')
    expect(cartListElements).toHaveLength(
      MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProducts.length
    )
  })
})
