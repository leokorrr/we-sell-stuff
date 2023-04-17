import styled from 'styled-components'

export const CostsContainer = styled.div`
  .costs {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
    padding-left: 16px;
    padding-right: 16px;

    &__cost {
      display: flex;
      justify-content: space-between;

      &:last-of-type {
        border-top: 1px solid #000000;
        padding-top: 16px;
      }
    }
  }
`
