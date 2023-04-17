import styled from 'styled-components'

export const CartPopupContainer = styled.div`
  .cart-popup {
    border: 1px solid #000000;
    padding-top: 16px;
    padding-bottom: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
    z-index: 2;
    overflow-y: scroll;
    overscroll-behavior: contain;

    ::-webkit-scrollbar {
      display: none;
    }

    &__header {
      margin-bottom: 20px;
      font-size: 20px;
      padding-left: 16px;
      padding-right: 16px;
    }

    &__costs {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 30px;
      padding-left: 16px;
      padding-right: 16px;
    }

    &__list {
      padding-left: 16px;
      padding-right: 16px;
    }

    &__shadow {
      background-color: transparent;
      width: 100%;
      height: 2px;
      box-shadow: 2.4px 2.4px 3.2px #00000026;
    }

    &__cost {
      display: flex;
      justify-content: space-between;

      &:last-of-type {
        border-top: 1px solid #000000;
        padding-top: 16px;
      }
    }

    &__mobile-close-icon {
      display: flex;
      flex-direction: row-reverse;
      margin-right: 16px;
      margin-top: 4px;
    }

    &__costs-container {
      background-color: #d9d9d9;
      width: 100%;
      left: 0;
      bottom: 24px;
    }

    &__button-container {
      padding-left: 16px;
      padding-right: 16px;
      width: 100%;
      margin-top: 16px;

      .button {
        width: 100%;
      }
    }
  }

  .cart-popup-trigger {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;

    &__items-amount {
      font-size: 16px;
      border-radius: 20px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    position: relative;

    .cart-popup {
      position: absolute;
      top: 40px;
      right: 0;
      left: unset;
      width: 400px;
      height: unset;

      &__mobile-close-icon {
        display: none;
      }

      &__costs-container {
        position: relative;
        width: unset;
        left: unset;
        bottom: unset;
      }
    }
  }
`
