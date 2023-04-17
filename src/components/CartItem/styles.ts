import styled from 'styled-components'

export const CartItemContainer = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #000000;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    margin-bottom: 4px;
    border-bottom: none;
  }

  .cart-item {
    display: flex;

    &__image-container {
      margin-right: 20px;
    }

    &__header {
      font-size: 16px;
    }

    &__product-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }

    &__remove-button {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }

    &__remove-button-text {
      text-decoration: underline;
      user-select: none;
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        color: #6320ef;
      }
    }

    &__price {
      font-weight: bold;
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    .cart-item {
      &__header {
        font-size: 20px;
      }
    }
  }
`
