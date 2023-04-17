import { AppContext } from '@/context/AppContext/AppContext'
import { MOCKED_CONTEXT_DATA } from '@/mocks/contextData'
import { IAppContext } from '@/types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import { act } from 'react-dom/test-utils'
import { ProductCard } from '../ProductCard'

const renderProductCard = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <ProductCard
        id={contextValue.cartProducts[0].id}
        name={contextValue.cartProducts[0].name}
        description={contextValue.cartProducts[0].description}
        price={contextValue.cartProducts[0].price}
        imageUrl={contextValue.cartProducts[0].imageUrl}
      />
    </AppContext.Provider>
  )

describe('ProductCard...', () => {
  test('renders correctly', () => {
    renderProductCard(MOCKED_CONTEXT_DATA)

    const name = screen.getByRole('heading', {
      name: /natural honey bottle/i
    })
    expect(name).toBeInTheDocument()

    const image = screen.getByRole('img', {
      name: /product\-image/i
    })
    expect(image).toBeInTheDocument()

    const description = screen.getByText(/test/i)
    expect(description).toBeInTheDocument()

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    expect(addToCartButton).toBeInTheDocument()

    const price = screen.getByRole('button', { name: /188/i })
    expect(price).toBeInTheDocument()
  })

  test('description initially is hidden', () => {
    renderProductCard(MOCKED_CONTEXT_DATA)

    const description = screen.getByText(/test/i)
    expect(description).not.toBeVisible()
  })

  test('show description on hover', async () => {
    userEvent.setup()

    renderProductCard(MOCKED_CONTEXT_DATA)

    const hoverTrigger = screen.getByTestId('hover-test')

    userEvent.hover(hoverTrigger)

    const description = screen.getByText(
      `${MOCKED_CONTEXT_DATA.cartProducts[0].description}`
    )
    expect(description).toBeInTheDocument()

    await act(async () => await userEvent.unhover(hoverTrigger))
    expect(description).not.toBeVisible()
  })

  test('add to cart handler should be callable', async () => {
    userEvent.setup()

    renderProductCard(MOCKED_CONTEXT_DATA)

    const addButton = screen.getByRole('button', { name: /Add to cart/i })

    await act(async () => await userEvent.click(addButton))
    expect(MOCKED_CONTEXT_DATA.handleCartProductAdd).toBeCalled()
  })
})
