import { AppContext } from '@/context/AppContext/AppContext'
import { MOCKED_CONTEXT_DATA } from '@/mocks/contextData'
import { IAppContext } from '@/types'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MainLayout } from '../MainLayout'

jest.mock('next/router', () => require('next-router-mock'))

const renderMainLayout = (contextValue: IAppContext) =>
  render(
    <AppContext.Provider value={contextValue}>
      <MainLayout>
        <h1>Content</h1>
      </MainLayout>
    </AppContext.Provider>
  )

describe('MainLayout...', () => {
  test('renders correctly', () => {
    renderMainLayout(MOCKED_CONTEXT_DATA)

    const navbar = screen.getByRole('heading', {
      name: /we sell stuff/i
    })
    expect(navbar).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  test('should render provided content', () => {
    renderMainLayout(MOCKED_CONTEXT_DATA)

    const pageHeader = screen.getByRole('heading', {
      name: /Content/i
    })
    expect(pageHeader).toBeInTheDocument()
  })
})
