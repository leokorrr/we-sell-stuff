import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { IAppContext, ICartProduct, IProduct } from '@/types'
import {
  getLocalCartProducts,
  setLocalCartProducts
} from '@/utils/manageLocalCartProducts'

export const AppContext = createContext<IAppContext | null>(null)

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([])

  const [searchValue, setSearchValue] = useState<string>('')

  const [cartProductsAmount, setCartProductsAmount] = useState<number>(0)

  const [subtotalPrice, setSubtotalPrice] = useState<number>(0)

  const handleSearchValueChange = (value: string) => setSearchValue(value)

  const handleCartProductAdd = (product: IProduct) => () => {
    const isProductInCart = Boolean(
      cartProducts.find(
        (cartProduct: ICartProduct) => cartProduct.id === product.id
      )
    )

    let updatedArray = []

    if (isProductInCart) {
      const productIndex = cartProducts.findIndex(
        (cartProduct) => cartProduct.id === product.id
      )

      updatedArray = [
        ...cartProducts.slice(0, productIndex),
        {
          ...cartProducts[productIndex],
          quantity: cartProducts[productIndex].quantity + 1
        },
        ...cartProducts.slice(productIndex + 1)
      ]
    } else {
      updatedArray = [...cartProducts, { ...product, quantity: 1 }]
    }

    setCartProducts(updatedArray)

    setLocalCartProducts(updatedArray)
  }

  const handleCartProductRemove = (productId: number) => () => {
    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === productId
    )

    let updatedArray = []

    if (cartProducts[productIndex].quantity > 1) {
      updatedArray = [
        ...cartProducts.slice(0, productIndex),
        {
          ...cartProducts[productIndex],
          quantity: cartProducts[productIndex].quantity - 1
        },
        ...cartProducts.slice(productIndex + 1)
      ]
    } else {
      updatedArray = [
        ...cartProducts.slice(0, productIndex),
        ...cartProducts.slice(productIndex + 1)
      ]
    }

    setCartProducts(updatedArray)

    setLocalCartProducts(updatedArray)
  }

  useEffect(() => {
    setCartProducts(getLocalCartProducts())
  }, [])

  useEffect(() => {
    // Calculate total price and amount of items in cart
    const productsQuantity = cartProducts.reduce(
      (accumulator, product) => {
        return {
          price: accumulator.price + product.quantity * product.price,
          quantity: accumulator.quantity + product.quantity
        }
      },
      {
        price: 0,
        quantity: 0
      }
    )

    setCartProductsAmount(productsQuantity.quantity)

    setSubtotalPrice(Math.round(productsQuantity.price * 100) / 100)
  }, [cartProducts])

  const state = {
    cartProducts,
    handleCartProductRemove,
    handleCartProductAdd,
    cartProductsAmount,
    subtotalPrice,
    searchValue,
    handleSearchValueChange
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}
