import { useAppContext } from '@/hooks/useAppContext'
import { ICartItem } from '@/types'
import Image from 'next/image'
import React from 'react'
import { CartItemContainer } from './styles'

export const CartItem: React.FC<ICartItem> = (props) => {
  const { id, name, quantity, price, imageUrl } = props

  const { handleCartProductRemove } = useAppContext()

  return (
    <CartItemContainer>
      <div className='cart-item' data-testid='cart-item'>
        <div className='cart-item__image-container'>
          <Image
            src={imageUrl}
            alt='product-image'
            width={120}
            height={120}
            style={{
              height: 'auto',
              objectFit: 'contain',
              position: 'relative'
            }}
          />
        </div>
        <div className='cart-item__product-info'>
          <h3 className='cart-item__header'>{name}</h3>
          <div className='cart-item__quantity'>Quantity: {quantity}</div>
          <div className='cart-item__price'>${price}</div>
          <div className='cart-item__remove-button'>
            <div
              className='cart-item__remove-button-text'
              onClick={handleCartProductRemove(id)}
            >
              Remove
            </div>
          </div>
        </div>
      </div>
    </CartItemContainer>
  )
}
