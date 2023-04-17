import { render, screen } from '@testing-library/react'
import { SkeletonCard } from '../SkeletonCard'

describe('Skeleton...', () => {
  test('renders correctly', () => {
    render(<SkeletonCard />)

    const skeletonCard = screen.getByTestId('skeleton')
    expect(skeletonCard).toBeInTheDocument()
  })
})
