export const MOCKED_CONTEXT_DATA = {
  cartProducts: [
    {
      id: 1,
      name: 'Natural Honey Bottle',
      quantity: 1,
      description: 'test',
      price: 188,
      imageUrl: 'https://source.unsplash.com/random/300×300'
    }
  ],
  cartProductsAmount: 1,
  subtotalPrice: 188,
  searchValue: '',
  handleSearchValueChange: jest.fn((value) => {
    MOCKED_CONTEXT_DATA.searchValue = value
  }),
  handleCartProductAdd: jest.fn((product) => () => {
    // Mock increase products amount
    MOCKED_CONTEXT_DATA.cartProductsAmount =
      MOCKED_CONTEXT_DATA.cartProductsAmount + 1

    // Mock cart product remove
    MOCKED_CONTEXT_DATA.cartProducts = [
      ...MOCKED_CONTEXT_DATA.cartProducts,
      { ...product, id: 2 }
    ]

    // Mock subtotalPrice change
    MOCKED_CONTEXT_DATA.subtotalPrice = 376
  }),
  handleCartProductRemove: jest.fn(() => () => {
    // Mock decrease products amount
    MOCKED_CONTEXT_DATA.cartProductsAmount = 0

    // Mock cart product remove
    MOCKED_CONTEXT_DATA.cartProducts = []

    // Mock subtotalPrice change
    MOCKED_CONTEXT_DATA.subtotalPrice = 0
  })
}

export const MOCKED_CONTEXT_DATA_TWO_PRODUCTS = {
  cartProducts: [
    {
      id: 1,
      name: 'Natural Honey Bottle',
      quantity: 1,
      description: 'test',
      price: 188,
      imageUrl: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 2,
      name: 'Natural Honey Bottle',
      quantity: 1,
      description: 'test',
      price: 188,
      imageUrl: 'https://source.unsplash.com/random/300×300'
    }
  ],
  searchValue: '',
  handleSearchValueChange: jest.fn(),
  cartProductsAmount: 2,
  subtotalPrice: 376,
  handleCartProductAdd: jest.fn((product) => () => {
    // Mock increase products amount
    MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProductsAmount =
      MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProductsAmount + 1

    // Mock cart product remove
    MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProducts = [
      ...MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProducts,
      product
    ]

    // Mock subtotalPrice change
    MOCKED_CONTEXT_DATA_TWO_PRODUCTS.subtotalPrice = 564
  }),
  handleCartProductRemove: jest.fn(() => () => {
    // Mock decrease products amount
    MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProductsAmount =
      MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProductsAmount - 1

    // Mock cart product remove
    MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProducts = [
      MOCKED_CONTEXT_DATA_TWO_PRODUCTS.cartProducts[0]
    ]

    // Mock subtotalPrice change
    MOCKED_CONTEXT_DATA_TWO_PRODUCTS.subtotalPrice = 188
  })
}

export const MOCKED_CONTEXT_DATA_QUANTITY = {
  cartProducts: [
    {
      id: 1,
      name: 'Natural Honey Bottle',
      quantity: 3,
      description: 'test',
      price: 188,
      imageUrl: 'https://source.unsplash.com/random/300×300'
    }
  ],
  searchValue: '',
  handleSearchValueChange: jest.fn(),
  subtotalPrice: 564,
  cartProductsAmount: 3,
  handleCartProductAdd: jest.fn(),
  handleCartProductRemove: jest.fn(() => () => {
    MOCKED_CONTEXT_DATA_QUANTITY.cartProducts[0].quantity =
    MOCKED_CONTEXT_DATA_QUANTITY.cartProducts[0].quantity - 1

    MOCKED_CONTEXT_DATA_QUANTITY.subtotalPrice =
    MOCKED_CONTEXT_DATA_QUANTITY.subtotalPrice - 188
  })
}

export const MOCKED_CONTEXT_DATA_NO_PRODUCTS = {
  ...MOCKED_CONTEXT_DATA,
  searchValue: '',
  handleSearchValueChange: jest.fn(),
  cartProductsAmount: 0,
  subtotalPrice: 0,
  cartProducts: []
}
