import styled from 'styled-components'

export const CartListContainer = styled.div`
  .cart-list {
    @media only screen and (min-width: 768px) {
      max-height: 390px;
      overflow-y: scroll;
      overscroll-behavior: contain;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`
