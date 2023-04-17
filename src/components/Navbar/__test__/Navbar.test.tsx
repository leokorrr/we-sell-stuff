import { AppContext } from '@/context/AppContext/AppContext'
import {
  MOCKED_CONTEXT_DATA,
  MOCKED_CONTEXT_DATA_NO_PRODUCTS,
  MOCKED_CONTEXT_DATA_TWO_PRODUCTS
} from '@/mocks/contextData'
import { IAppContext } from '@/types'
import { render, screen } from '@testing-library/react'
import { Navbar } from '../Navbar'

jest.mock('next/router', () => require('next-router-mock'))

const renderNavbar = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <Navbar />
    </AppContext.Provider>
  )

describe('Navbar...', () => {
  test('renders correctly', () => {
    renderNavbar(MOCKED_CONTEXT_DATA)

    const pageHeader = screen.getByRole('heading', {
      name: /we sell stuff/i
    })
    expect(pageHeader).toBeInTheDocument()

    const cartIcon = screen.getByRole('img', {
      name: /shopping\-bag/i
    })
    expect(cartIcon).toBeInTheDocument()

    const itemsCount = screen.getByTestId(/items-count/i)
    expect(itemsCount).toBeInTheDocument()

    const logo = screen.getByRole('img', {
      name: /shop\-logo/i
    })
    expect(logo).toBeInTheDocument()
  })

  test('should not render items count if no items in cart', () => {
    renderNavbar(MOCKED_CONTEXT_DATA_NO_PRODUCTS)

    const itemsCount = screen.queryByTestId(/items-count/i)
    expect(itemsCount).not.toBeInTheDocument()
  })

  test('should render items count with number of items in cart', () => {
    renderNavbar(MOCKED_CONTEXT_DATA_TWO_PRODUCTS)

    const itemsCount = screen.getByTestId(/items-count/i)
    expect(itemsCount).toHaveTextContent(
      String(MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProductsAmount)
    )
  })
})
