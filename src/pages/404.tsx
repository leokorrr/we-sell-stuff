import Link from 'next/link'
import React from 'react'
import fourOhFourImage from '../assets/404.svg'
import Image from 'next/image'
import { FourOhFourContainer } from '@/styles/FourOhFour.styles'
import Head from 'next/head'

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <FourOhFourContainer>
        <div className='not-found'>
          <Image src={fourOhFourImage} alt='404-image' width={360} />
          <div>
            <Link href='/' className='not-found__link'>
              Go back home
            </Link>
          </div>
        </div>
      </FourOhFourContainer>
    </>
  )
}

export default FourOhFour
