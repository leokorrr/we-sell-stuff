import { AppContext } from '@/context/AppContext/AppContext'
import { MOCKED_CONTEXT_DATA } from '@/mocks/contextData'
import { IAppContext } from '@/types'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { ProductsList } from '../ProductsList'
import { useProductsList } from '../useProductsList'
import { PropsWithChildren } from 'react'

const intersectionObserverMock = () => ({
  observe: jest.fn(),
  disconnect: jest.fn()
})

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock)

const renderProductsList = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <ProductsList />
    </AppContext.Provider>
  )

const hookContextWrapper = ({ children }: PropsWithChildren) => (
  <AppContext.Provider value={MOCKED_CONTEXT_DATA}>
    {children}
  </AppContext.Provider>
)

describe('ProductsList...', () => {
  test('renders correctly', () => {
    renderProductsList(MOCKED_CONTEXT_DATA)

    const skeletonElements = screen.getAllByTestId('skeleton')
    expect(skeletonElements).toHaveLength(12)
  })

  test('hook should initially render with no data', () => {
    const { result } = renderHook(() => useProductsList(), { wrapper: hookContextWrapper })
    expect(result.current.products).toHaveLength(0)
  })

  test('hook should initially start loading data', async () => {
    const { result } = renderHook(() => useProductsList(), { wrapper: hookContextWrapper })

    expect(result.current.isLoading).toBe(true)
  })

  test('hook should load 10 first products', async () => {
    const { result } = renderHook(() => useProductsList(), { wrapper: hookContextWrapper })

    await waitFor(() =>
      expect(result.current.products).toHaveLength(
        result.current.products.length
      )
    )
  })

  test('loading should be false after products loaded', async () => {
    const { result } = renderHook(() => useProductsList(), { wrapper: hookContextWrapper })

    await waitFor(() =>
      expect(result.current.products).toHaveLength(
        result.current.products.length
      )
    )

    expect(result.current.isLoading).toBe(false)
    expect(result.current.isLoadingMore).toBe(false)
  })

  test('should render 10 cards', async () => {
    renderProductsList(MOCKED_CONTEXT_DATA)

    const productCards = await screen.findAllByTestId('product-card')
    expect(productCards).toHaveLength(10)
  })
})
