import { useAppContext } from '@/hooks/useAppContext'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { Button } from '@/ui/Button'
import { handleScrollLock, handleScrollUnlock } from '@/utils/scroll'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import closeIcon from '../../assets/closeIcon.svg'
import shoppingBag from '../../assets/shopping-bag.svg'
import { CartList } from '../CartList'
import { Costs } from '../Costs'
import { CartPopupContainer } from './styles'

export const CartPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const [windowWidth, setWindowWidth] = useState<number>(0)

  const { cartProductsAmount } = useAppContext()

  const router = useRouter()

  const cartPopupRef = useRef(null)

  useOutsideClick(cartPopupRef, () => setShowPopup(false))

  const handlePopupToggle = () => setShowPopup(!showPopup)

  const handleCartNavigate = () => {
    handlePopupToggle()
    router.push('/cart')
  }

  // Get window width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)

      window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    }

    return () =>
      window.removeEventListener('resize', () =>
        setWindowWidth(window.innerWidth)
      )
  }, [])

  // Disable scroll when cart is open on mobile devices
  useEffect(() => {
    if (windowWidth <= 768 && showPopup) {
      handleScrollLock()
    } else {
      handleScrollUnlock()
    }
  }, [windowWidth, showPopup])

  return (
    <CartPopupContainer ref={cartPopupRef}>
      <div className='cart-popup-trigger' onClick={handlePopupToggle}>
        <Image src={shoppingBag} alt='shopping-bag' width={24} height={24} />
        {cartProductsAmount > 0 ? (
          <div
            className='cart-popup-trigger__items-amount'
            data-testid='items-count'
          >
            {cartProductsAmount}
          </div>
        ) : null}
      </div>
      {showPopup ? (
        <div className='cart-popup'>
          <div
            className='cart-popup__mobile-close-icon'
            onClick={handlePopupToggle}
          >
            <Image src={closeIcon} width={24} height={24} alt='close-icon' />
          </div>
          <h2 className='cart-popup__header'>Your cart:</h2>
          <div className='cart-popup__list'>
            <CartList />
          </div>
          <div className='cart-popup__costs-container'>
            {cartProductsAmount > 0 ? (
              <div className='cart-popup__shadow'></div>
            ) : null}
            <Costs />
            <div className='cart-popup__button-container'>
              <Button
                text='Go to cart'
                variation='secondary'
                onClick={handleCartNavigate}
              />
            </div>
          </div>
        </div>
      ) : null}
    </CartPopupContainer>
  )
}
