import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  box-shadow: 0px 0px 4px #e5eaf3;

  .navbar {
    background-color: #ffffff;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__header {
      font-size: 20px;
      font-weight: bold;
    }

    &__logo {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__link {
      color: #000000;
      text-decoration: none;
    }
  }

  @media only screen and (min-width: 768px) {
    .navbar {
      &__header {
        font-size: 26px;
      }
    }
  }
`
