import { render, screen } from "@testing-library/react"
import { Footer } from "../Footer"

describe('Footer...', () => {
  test('renders correctly', () => {
    render(
      <Footer />
    )

    const footerContent = screen.getByRole('contentinfo')
    expect(footerContent).toBeInTheDocument()
  })
})
