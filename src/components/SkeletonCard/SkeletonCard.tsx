import React from 'react'
import { SkeletonCardContainer } from './styles'

export const SkeletonCard: React.FC = () => {
  return (
    <SkeletonCardContainer>
      <div className='skeleton-card' data-testid="skeleton">
        <div className='skeleton-card__image-placeholder skeleton-card__animated'></div>
        <div className='skeleton-card__header-placeholder skeleton-card__animated'></div>
        <div className='skeleton-card__button-container'>
          <div className='skeleton-card__button-placeholder skeleton-card__animated'></div>
        </div>
      </div>
    </SkeletonCardContainer>
  )
}
