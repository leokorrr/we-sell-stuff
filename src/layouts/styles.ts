import styled from 'styled-components'

export const MainLayoutContainer = styled.div`
  .layout {
    &__content-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: calc(100vh - 140px);

      & > div {
        max-width: 1300px;
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 980px) {
    .layout {
      &__content-wrapper {
        & > div {
          width: unset;
        }
      }
    }
  }

  @media only screen and (min-width: 1340px) {
    .layout {
      &__content-wrapper {
        & > div {
          min-width: 1300px;
        }
      }
    }
  }
`
