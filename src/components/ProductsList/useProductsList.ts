import { IProduct } from '@/types'
import { PAGE_SIZE } from '@/utils/constants'
import { swrFetcher } from '@/utils/swrFetcher'
import useSWRInfinite from 'swr/infinite'
import { IUseProductsList } from './types'
import { useCallback, useRef } from 'react'
import { useAppContext } from '@/hooks/useAppContext'

export const useProductsList = (): IUseProductsList => {
  const { searchValue } = useAppContext()

  // Decide what endpoint should be called
  // If search value is presented and 3+ characters, call search
  // Else call main products endpoint
  const subUrl = searchValue.length > 2
    ? `/search?searchValue=${searchValue}&`
    : '?'

  const { data, size, setSize, isLoading } = useSWRInfinite(
    (index) => `${process.env.NEXT_PUBLIC_API_URL}/products${subUrl}page=${index + 1}`,
    swrFetcher
  )

  const observer = useRef<IntersectionObserver>()

  const products: IProduct[] = data ? [].concat(...data) : []

  const isEmpty = data?.[0]?.length === 0

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined')

  const handleProductsLoading = useCallback(
    () => setSize(size + 1),
    [setSize, size]
  )

  const lastProductRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoadingMore) return

      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isReachingEnd) {
          handleProductsLoading()
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoadingMore, isReachingEnd, handleProductsLoading]
  )

  return {
    products,
    isLoadingMore,
    isLoading,
    lastProductRef
  }
}
