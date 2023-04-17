import styled from 'styled-components'

export const CartPageContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  & > div {
    width: 100%;
  }

  .cart-page {
    padding-top: 16px;

    &__header {
      font-size: 20px;
      margin-bottom: 16px;
    }

    &__shadow {
      background-color: transparent;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #e5eaf3;
    }

    &__costs-wrapper {
      background-color: #fff;
      position: relative;
      z-index: 10;
    }

    .costs {
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 32px;
    }

    &__button-container {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;

      & > div {
        width: 100%;

        button {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .cart-list {
      max-height: unset;
    }
  }
  @media only screen and (min-width: 980px) {
    width: 100%;
    display: flex;
    justify-content: center;

    & > div {
      width: 900px;
    }

    .cart-page {
      padding-top: 20px;

      &__header {
        font-size: 24px;
        margin-bottom: 32px;
      }

      &__button-container {
        & > div {
          width: fit-content;

          button {
            width: 300px;
          }
        }
      }
    }
  }
`
