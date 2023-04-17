import styled from 'styled-components'

export const ButtonContainer = styled.div`
  .button {
    border: none;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 600;
    width: fit-content;

    &:hover {
      cursor: pointer;
    }

    &--primary {
      border: 2px solid #000000;
      transition: 0.4s;
      background-color: transparent;
      color: #000000;

      &:hover {
        background-color: #000000;
        color: #ffffff;
      }
    }

    &--secondary {
      transition: 0.4s;
      background-color: #000000;
      color: #ffffff;

      &:hover {
        border: 2px solid #000000;
        background-color: transparent;
        color: #000000;
      }
    }

    &:disabled {
      background-color: #cccccc;

      &:hover {
        background-color: #cccccc;
        color: #ffffff;
        border: none;
        cursor: inherit;
      }
    }
  }
`
