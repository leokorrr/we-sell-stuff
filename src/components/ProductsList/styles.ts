import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
