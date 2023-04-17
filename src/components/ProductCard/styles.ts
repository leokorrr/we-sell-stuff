import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 100%;

  .product-card {
    width: 100%;

    &__image {
      width: 100%;
      height: auto;
      object-fit: contain;
      position: relative;
    }

    &__top {
      position: relative;

      &:hover {
        .product-card__description {
          opacity: 1;
          background-color: rgba(256, 256, 256, 0.9);
        }
      }
    }

    &__description {
      width: 100%;
      height: 100%;
      padding: 12px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(256, 256, 256, 0);
      transition: 0.3s;
      opacity: 0;
    }

    &__bottom {
      margin-top: 8px;
    }

    &__header {
      margin-bottom: 16px;
      font-size: 18px;
      width: 100%;
    }

    &__wrapper {
      display: flex;
      flex-direction: row-reverse;
    }
  }

  @media only screen and (min-width: 980px) {
    .product-card {
      max-width: 300px;
    }
  }
`
