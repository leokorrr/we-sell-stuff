import { IProduct } from '@/types'

export interface IUseProductsList {
  products: IProduct[]
  isLoadingMore: boolean | undefined
  isLoading: boolean | undefined
  lastProductRef: (node: HTMLDivElement) => void
}
