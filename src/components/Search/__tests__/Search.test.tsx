import { render, screen } from '@testing-library/react'
import { Search } from '../Search'
import { AppContext } from '@/context/AppContext/AppContext'
import { IAppContext } from '@/types'
import { MOCKED_CONTEXT_DATA } from '@/mocks/contextData'
import userEvent from '@testing-library/user-event/'
import { act } from 'react-dom/test-utils'

const renderSearch = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <Search />
    </AppContext.Provider>
  )

describe('Search...', () => {
  test('renders correctly', () => {
    renderSearch(MOCKED_CONTEXT_DATA)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  test('input should have typed value', async () => {
    userEvent.setup()

    renderSearch(MOCKED_CONTEXT_DATA)

    const input = screen.getByRole('textbox')

    await act(async () => await userEvent.type(input, 'Hello'))

    expect(input).toHaveValue('Hello')
  })
})
