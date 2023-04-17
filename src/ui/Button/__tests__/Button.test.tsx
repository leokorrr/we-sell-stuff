import { act, render, screen } from '@testing-library/react'
import { Button } from '../Button'
import userEvent from '@testing-library/user-event/'

describe('Button...', () => {
  test('renders correctly', () => {
    render(<Button text='text' />)

    const button = screen.getByRole('button', { name: /text/i })
    expect(button).toBeInTheDocument()
  })

  test('should be disabled if param provided', () => {
    render(<Button text='text' isDisabled />)

    const button = screen.getByRole('button', { name: /text/i })
    expect(button).toBeDisabled()
  })

  test('should fire provided handler', async () => {
    const buttonHandler = jest.fn()

    render(<Button text='text' onClick={buttonHandler}/>)

    const button = screen.getByRole('button', { name: /text/i })

    await act(async () => await userEvent.click(button))

    expect(buttonHandler).toBeCalledTimes(1)
  })
})
