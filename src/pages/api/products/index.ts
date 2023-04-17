import { IProduct } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../../../public/data/products.json'
import { PAGE_SIZE } from '@/utils/constants'

//  Simple main products endpoint
//  There is no actual DB, so try catch block is not needed (And it's not a BE test :))
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  if (req.method === 'GET') {
    const page = req.query?.page ? Number(req.query?.page) : 1

    const serializedProducts = products
      .slice(PAGE_SIZE * page - PAGE_SIZE, PAGE_SIZE * page)
      .map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.image
      }))

    res.status(200).json(serializedProducts)
  }
}
