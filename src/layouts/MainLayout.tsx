import React, { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import { MainLayoutContainer } from './styles'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainLayoutContainer>
      <div className='layout'>
        <Navbar />
        <main className={inter.className}>
          <div className='layout__content-wrapper'>
            <div>{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </MainLayoutContainer>
  )
}
