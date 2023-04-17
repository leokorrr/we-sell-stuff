import {
  MOCKED_CONTEXT_DATA,
  MOCKED_CONTEXT_DATA_TWO_PRODUCTS
} from '@/mocks/contextData'
import { ICartProduct, IAppContext } from '@/types'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import { useContext } from 'react'
import { AppContext } from './AppContext'

const MockComponent: React.FC<{ product: ICartProduct }> = (props) => {
  const { product } = props

  const {
    cartProducts,
    cartProductsAmount,
    handleCartProductAdd,
    handleCartProductRemove,
    subtotalPrice,
    searchValue,
    handleSearchValueChange
  } = useContext(AppContext) as IAppContext

  return (
    <>
      <div>{searchValue}</div>
      <div>{subtotalPrice}</div>
      <div>{cartProductsAmount}</div>
      <div>
        {cartProducts.map((cartProduct: ICartProduct) => (
          <div key={cartProduct.id}>{cartProduct.name}</div>
        ))}
      </div>
      <button onClick={() => handleSearchValueChange('hello')}>search</button>
      <button onClick={handleCartProductAdd(product)}>add product</button>
      <button onClick={handleCartProductRemove(product.id)}>
        remove product
      </button>
    </>
  )
}

const renderMockComponent = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <MockComponent product={contextValue.cartProducts[0]} />
    </AppContext.Provider>
  )

const rerenderMockComponent = (
  contextValue: IAppContext,
  rerender: (ui: React.ReactElement) => void
) =>
  rerender(
    <AppContext.Provider value={contextValue}>
      <MockComponent product={contextValue.cartProducts[0]} />
    </AppContext.Provider>
  )

describe('App Provider', () => {
  test('provides expected data to component', () => {
    renderMockComponent(MOCKED_CONTEXT_DATA)

    const subtotalPrice = screen.getByText(/188/i)
    expect(subtotalPrice).toBeInTheDocument()

    const cartProductsAmount = screen.getByText(/^1$/i)
    expect(cartProductsAmount).toBeInTheDocument()

    const product = screen.getByText(
      `${MOCKED_CONTEXT_DATA.cartProducts[0].name}`
    )
    expect(product).toBeInTheDocument()
  })

  test('should decrease products amount, subtotal price, remove cart product', async () => {
    userEvent.setup()

    const { rerender } = renderMockComponent(MOCKED_CONTEXT_DATA_TWO_PRODUCTS)

    const removeProductButton = screen.getByRole('button', {
      name: /remove product/i
    })

    //  Init values
    const cartProductsAmount = screen.getByText(/^2$/i)
    expect(cartProductsAmount).toBeInTheDocument()

    const cartProductsPrice = screen.getByText(/^376$/i)
    expect(cartProductsPrice).toBeInTheDocument()

    const cartProducts = screen.getAllByText(/^Natural Honey Bottle$/i)
    expect(cartProducts).toHaveLength(2)

    // Click remove button
    await act(async () => await userEvent.click(removeProductButton))

    // Rerender component with new values
    rerenderMockComponent(MOCKED_CONTEXT_DATA_TWO_PRODUCTS, rerender)

    // Check for new values
    const cartProductsAmountOne = screen.getByText(/^1$/i)
    expect(cartProductsAmountOne).toBeInTheDocument()

    const cartProductsPriceOne = screen.getByText(/^188$/i)
    expect(cartProductsPriceOne).toBeInTheDocument()

    const cartProduct = screen.getByText(/^Natural Honey Bottle$/i)
    expect(cartProduct).toBeInTheDocument()
  })

  test('should increase products amount, subtotal price, add cart product', async () => {
    userEvent.setup()

    const { rerender } = renderMockComponent(MOCKED_CONTEXT_DATA)

    const addProductButton = screen.getByRole('button', {
      name: /add product/i
    })

    //  Init values
    const cartProductsAmount = screen.getByText(/^1$/i)
    expect(cartProductsAmount).toBeInTheDocument()

    const cartProductsPrice = screen.getByText(/^188$/i)
    expect(cartProductsPrice).toBeInTheDocument()

    const cartProducts = screen.getByText(/^Natural Honey Bottle$/i)
    expect(cartProducts).toBeInTheDocument()

    // Click remove button
    await act(async () => await userEvent.click(addProductButton))

    // Rerender component with new values
    rerenderMockComponent(MOCKED_CONTEXT_DATA, rerender)

    // Check for new values
    const cartProductsAmountIncreased = screen.getByText(/^2$/i)
    expect(cartProductsAmountIncreased).toBeInTheDocument()

    const cartProductsPriceIncreased = screen.getByText(/^376$/i)
    expect(cartProductsPriceIncreased).toBeInTheDocument()

    const cartProductsAdded = screen.getAllByText(/^Natural Honey Bottle$/i)
    expect(cartProductsAdded).toHaveLength(2)
  })

  test('should update search value', async () => {
    userEvent.setup()

    const { rerender } = renderMockComponent(MOCKED_CONTEXT_DATA)

    const searchButton = screen.getByRole('button', {
      name: /search/i
    })

    await act(async () => await userEvent.click(searchButton))

    rerenderMockComponent(MOCKED_CONTEXT_DATA, rerender)

    const searchValue = screen.getByText(/^Hello$/i)
    expect(searchValue).toBeInTheDocument()
  })

})
