import React from 'react'
import { NavbarContainer } from './styles'
import { CartPopup } from '../CartPopup'
import Image from 'next/image'
import shopLogo from '../../assets/shopLogo.svg'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div className='navbar'>
        <Link href='/' className='navbar__link'>
          <div className='navbar__logo'>
            <Image src={shopLogo} width={30} height={30} alt='shop-logo' />
            <h1 className='navbar__header'>We sell stuff</h1>
          </div>
        </Link>
        <CartPopup />
      </div>
    </NavbarContainer>
  )
}
