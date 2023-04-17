import React from 'react'
import { ProductCard } from '../ProductCard'
import { SkeletonCard } from '../SkeletonCard'
import { ProductsListContainer } from './styles'
import { useProductsList } from './useProductsList'

const SKELETONS_AMOUNT = 12

export const ProductsList: React.FC = () => {
  const { products, isLoadingMore, isLoading, lastProductRef } = useProductsList()

  if (isLoading) {
    return (
      <ProductsListContainer>
        {[...Array(SKELETONS_AMOUNT)].map((item, index) => (
          <SkeletonCard key={index} />
        ))}
      </ProductsListContainer>
    )
  }

  if (products.length === 0) return <div>No products</div>

  return (
    <ProductsListContainer>
      {products.map((product: any, index: any) => (
        <div
          key={product.id}
          ref={products.length === index + 1 ? lastProductRef : null}
        >
          <ProductCard
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </div>
      ))}
      {isLoadingMore && <SkeletonCard />}
    </ProductsListContainer>
  )
}
