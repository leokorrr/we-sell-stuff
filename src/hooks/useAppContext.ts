import { AppContext } from '@/context/AppContext/AppContext'
import { IAppContext } from '@/types'
import { useContext } from 'react'

export const useAppContext = () => {
  const {
    cartProducts,
    cartProductsAmount,
    handleCartProductAdd,
    handleCartProductRemove,
    searchValue,
    handleSearchValueChange,
    subtotalPrice
  } = useContext(AppContext) as IAppContext

  return {
    cartProducts,
    cartProductsAmount,
    handleCartProductAdd,
    handleCartProductRemove,
    subtotalPrice,
    searchValue,
    handleSearchValueChange,
  }
}
