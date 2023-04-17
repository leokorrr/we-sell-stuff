import styled from 'styled-components'

export const SearchContainer = styled.div`
  .search {
    &__input {
      height: 44px;
      width: 100%;
      margin-bottom: 30px;
      padding-left: 12px;
      padding-right: 12px;
      font-size: 16px;
      border: 2px solid black;
      margin-right: 20px;
    }

    &__clear {
      transition: 0.2s;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
        color: #6320ef;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .search {
      &__input {
        width: 400px;
      }
    }
  }
`
