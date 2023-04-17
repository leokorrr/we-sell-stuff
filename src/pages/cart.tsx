import { CartList } from '@/components/CartList'
import { Costs } from '@/components/Costs'
import { useAppContext } from '@/hooks/useAppContext'
import { CartPageContainer } from '@/styles/CartPage.styles'
import { Button } from '@/ui/Button'
import Head from 'next/head'
import { useRouter } from 'next/router'

const CartPage = () => {
  const { cartProductsAmount } = useAppContext()

  const router = useRouter()

  const handleShippingNavigate = () => router.push('/shipping')

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <CartPageContainer>
        <div>
          <div className='cart-page'>
            <h2 className='cart-page__header'>Your cart:</h2>
            <div className='cart-page__list-wrapper'>
              <CartList />
            </div>
            <div className='cart-page__costs-wrapper'>
              {cartProductsAmount > 0 ? (
                <div className='cart-page__shadow'></div>
              ) : null}
              <Costs />
            </div>
            <div className='cart-page__button-container'>
              <Button
                text='Continue to shipping'
                variation='secondary'
                onClick={handleShippingNavigate}
                isDisabled={cartProductsAmount === 0}
              />
            </div>
          </div>
        </div>
      </CartPageContainer>
    </>
  )
}

export default CartPage
