import { AppContext } from '@/context/AppContext/AppContext'
import { MOCKED_CONTEXT_DATA } from '@/mocks/contextData'
import Home from '@/pages/index'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Home...', () => {
  test('renders correctly', () => {
    render(
      <AppContext.Provider value={MOCKED_CONTEXT_DATA}>
        <Home />
      </AppContext.Provider>
    )

    const welcomeText = screen.getByText(/Lorem ipsum/i)
    expect(welcomeText).toBeInTheDocument()
  })
})
