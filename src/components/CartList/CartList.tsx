import { useAppContext } from '@/hooks/useAppContext'
import { ICartItem } from '@/types'
import React from 'react'
import { CartItem } from '../CartItem'
import { CartListContainer } from './style'

export const CartList: React.FC = () => {
  const { cartProducts } = useAppContext()

  if (cartProducts.length === 0) return <div>The cart is empty...</div>

  return (
    <CartListContainer>
      <div className='cart-list'>
        {cartProducts.map((cartItem: ICartItem) => (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            quantity={cartItem.quantity}
            imageUrl={cartItem.imageUrl}
            price={cartItem.price}
          />
        ))}
      </div>
    </CartListContainer>
  )
}
