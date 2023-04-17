export interface ICartItem {
  id: number
  name: string
  quantity: number
  price: number
  imageUrl: string
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface IAppContext {
  cartProducts: ICartProduct[]
  cartProductsAmount: number
  subtotalPrice: number
  searchValue: string
  handleSearchValueChange: (value: string) => void
  handleCartProductAdd: (product: IProduct) => () => void
  handleCartProductRemove: (productId: number) => () => void
}
