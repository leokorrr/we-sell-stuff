import { AppContext } from '@/context/AppContext/AppContext'
import {
  MOCKED_CONTEXT_DATA,
  MOCKED_CONTEXT_DATA_QUANTITY
} from '@/mocks/contextData'
import { IAppContext } from '@/types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import { act } from 'react-dom/test-utils'
import { CartItem } from '../CartItem'

const renderCartItem = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <CartItem
        id={contextValue.cartProducts[0].id}
        name={contextValue.cartProducts[0].name}
        quantity={contextValue.cartProducts[0].quantity}
        price={contextValue.cartProducts[0].price}
        imageUrl={contextValue.cartProducts[0].imageUrl}
      />
    </AppContext.Provider>
  )

const rerenderCartItem = (
  contextValue: IAppContext,
  rerender: (ui: React.ReactElement) => void
) =>
  rerender(
    <AppContext.Provider value={contextValue}>
      <CartItem
        id={contextValue.cartProducts[0].id}
        name={contextValue.cartProducts[0].name}
        quantity={contextValue.cartProducts[0].quantity}
        price={contextValue.cartProducts[0].price}
        imageUrl={contextValue.cartProducts[0].imageUrl}
      />
    </AppContext.Provider>
  )

describe('CartItem...', () => {
  test('renders correctly', () => {
    renderCartItem(MOCKED_CONTEXT_DATA)

    const cardHeader = screen.getByRole('heading', {
      name: /natural honey bottle/i
    })
    expect(cardHeader).toBeInTheDocument()

    const quantity = screen.getByText(/quantity: 1/i)
    expect(quantity).toBeInTheDocument()

    const price = screen.getByText(/\$188/i)
    expect(price).toBeInTheDocument()

    const removeButton = screen.getByText(/remove/i)
    expect(removeButton).toBeInTheDocument()

    const image = screen.getByRole('img', {
      name: /product\-image/i
    })
    expect(image).toBeInTheDocument()
  })

  test('quantity should change on remove', async () => {
    userEvent.setup()

    const { rerender } = renderCartItem(MOCKED_CONTEXT_DATA_QUANTITY)

    const removeButton = screen.getByText(/remove/i)

    const quantityTwo = screen.getByText(/quantity: 3/i)
    expect(quantityTwo).toBeInTheDocument()

    await act(async () => await userEvent.click(removeButton))

    rerenderCartItem(MOCKED_CONTEXT_DATA_QUANTITY, rerender)

    const quantityOne = screen.getByText(/quantity: 2/i)
    expect(quantityOne).toBeInTheDocument()
  })
})
