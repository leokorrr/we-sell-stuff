import { IProduct } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../../../../public/data/products.json'
import { PAGE_SIZE } from '@/utils/constants'

//  Simple products search endpoint
//  There is no actual DB, so try catch block is not needed (And it's not a BE test :))
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | { msg: string }>
) {
  if (req.method === 'GET') {
    const searchValue = req.query?.searchValue
      ? String(req.query?.searchValue).toLowerCase()
      : ''

    const page = req.query?.page ? Number(req.query?.page) : 1

    if (searchValue.length > 2) {
      const serializedProducts = products
        .filter((product) => product.name.toLowerCase().includes(searchValue))
        .slice(PAGE_SIZE * page - PAGE_SIZE, PAGE_SIZE * page)
        .map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          imageUrl: product.image
        }))

      res.status(200).json(serializedProducts)
    } else {
      res.status(404).json({ msg: 'Too short search word' })
    }
  }
}
