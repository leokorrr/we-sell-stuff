import { AppContext } from '@/context/AppContext/AppContext'
import { MOCKED_CONTEXT_DATA } from '@/mocks/contextData'
import FourOhFour from '@/pages/404'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('FourOhFour...', () => {
  test('renders correctly', () => {
    render(
      <AppContext.Provider value={MOCKED_CONTEXT_DATA}>
        <FourOhFour />
      </AppContext.Provider>
    )

    const notFoundImage = screen.getByRole('img', {
      name: /404\-image/i
    })
    expect(notFoundImage).toBeInTheDocument()

    const goBackLink = screen.getByRole('link', {
      name: /go back home/i
    })
    expect(goBackLink).toBeInTheDocument()
  })
})
