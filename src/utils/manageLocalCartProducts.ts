import { ICartProduct } from '@/types'

export const getLocalCartProducts = () => {
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('cartProducts') !== null
  ) {
    return JSON.parse(String(localStorage.getItem('cartProducts')))
  }
  return []
}

export const setLocalCartProducts = (cartProducts: ICartProduct[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }
}
