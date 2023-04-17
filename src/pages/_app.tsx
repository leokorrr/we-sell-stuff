import { AppProvider } from '@/context/AppContext/AppContext'
import { MainLayout } from '@/layouts/MainLayout'
import { GlobalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MainLayout>
        <GlobalStyles />
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}
