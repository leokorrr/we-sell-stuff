import { render, screen } from "@testing-library/react"
import { WelcomeText } from "../WelcomeText"

describe('WelcomeText...', () => {
  test('renders correctly', () => {
    render(<WelcomeText />)

    const welcomeText = screen.getByText(/Lorem ipsum/i)
    expect(welcomeText).toBeInTheDocument()
  })
})