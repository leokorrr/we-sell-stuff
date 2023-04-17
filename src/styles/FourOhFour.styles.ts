import styled from 'styled-components'

export const FourOhFourContainer = styled.div`
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__link {
      text-decoration: none;
      color: #000000;
      transition: 0.2s;

      &:hover {
        color: #6320EF;
      }
    }
  }
`
