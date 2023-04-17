import { ProductsList } from '@/components/ProductsList'
import { Search } from '@/components/Search'
import { WelcomeText } from '@/components/WelcomeText'
import { HomeContainer } from '@/styles/Home.styles'
import Head from 'next/head'

const Home = () => {
  return (
    <HomeContainer>
      <Head>
        <title>We sell stuff</title>
        <meta name='description' content='WSS shop page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WelcomeText />
      <Search />
      <ProductsList />
    </HomeContainer>
  )
}

export default Home
