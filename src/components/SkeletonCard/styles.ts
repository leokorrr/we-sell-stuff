import styled from 'styled-components'

export const SkeletonCardContainer = styled.div`
  .skeleton-card {
    width: 100%;

    &__image-placeholder {
      height: 200px;
      width: 100%;
      margin-bottom: 8px;
      border-radius: 4px;
    }

    &__header-placeholder {
      height: 21px;
      width: 100%;
      max-width: 300px;
      margin-bottom: 16px;
      border-radius: 4px;
    }

    &__button-container {
      display: flex;
      flex-direction: row-reverse;
    }

    &__button-placeholder {
      height: 40px;
      border-radius: 4px;
      width: 150px;
    }

    &__animated {
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }

  @media only screen and (min-width: 980px) {
    .skeleton-card {
      width: 300px;
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`
