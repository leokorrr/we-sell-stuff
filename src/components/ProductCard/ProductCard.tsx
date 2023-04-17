import React from 'react'
import { Button } from '@/ui/Button'
import Image from 'next/image'
import { ProductCardContainer } from './styles'
import { IProduct } from '@/types'
import { useAppContext } from '@/hooks/useAppContext'

export const ProductCard: React.FC<IProduct> = (props) => {
  const { name, description, price, imageUrl } = props

  const { handleCartProductAdd } = useAppContext()

  return (
    <ProductCardContainer>
      <div className='product-card' data-testid='product-card'>
        <div className='product-card__top' data-testid='hover-test'>
          <Image
            src={imageUrl}
            className='product-card__image'
            alt='product-image'
            width={300}
            height={230}
          />
          <div className='product-card__description'>{description}</div>
        </div>
        <div className='product-card__bottom'>
          <div>
            <h3 className='product-card__header'>{name}</h3>
            <div className='product-card__wrapper'>
              <Button
                text={`Add to Cart - $${price}`}
                onClick={handleCartProductAdd(props)}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductCardContainer>
  )
}
