import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/api/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Men's Ski Jacket",
          description: 'A high-performance ski jacket for men',
          price: 299.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Ski',
          brand: 'The North Face',
          sku: 'TNF-SKI-MJ01',
          inventory: {
            S: 10,
            M: 20,
            L: 15,
            XL: 5
          }
        },
        {
          id: 2,
          name: "Women's Ski Pants",
          description: 'Warm and waterproof ski pants for women',
          price: 199.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Ski',
          brand: 'Columbia',
          sku: 'COL-SKI-WP02',
          inventory: {
            S: 5,
            M: 10,
            L: 20,
            XL: 15
          }
        },
        {
          id: 3,
          name: "Men's Snowboard Boots",
          description: 'Comfortable and durable snowboard boots for men',
          price: 249.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Snowboard',
          brand: 'Burton',
          sku: 'BUR-SNB-MB03',
          inventory: {
            '8': 15,
            '9': 10,
            '10': 5,
            '11': 20
          }
        },
        {
          id: 4,
          name: "Women's Snowboard",
          description: 'A versatile snowboard designed for women',
          price: 399.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Snowboard',
          brand: 'Ride',
          sku: 'RDE-SNB-WB04',
          inventory: {
            '144': 10,
            '148': 15,
            '152': 5,
            '156': 20
          }
        },
        {
          id: 5,
          name: 'Skateboard Deck',
          description: 'A high-quality skateboard deck made from maple wood',
          price: 59.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Skate',
          brand: 'Element',
          sku: 'ELM-SKT-SD05',
          inventory: {
            '7.75': 10,
            '8.0': 15,
            '8.25': 5,
            '8.5': 20
          }
        },
        {
          id: 7,
          name: 'Surfboard',
          description:
            'A high-performance surfboard designed for advanced riders',
          price: 799.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Surf',
          brand: 'Channel Islands',
          sku: 'CI-SRF-SB07',
          inventory: {
            '5\'10"': 5,
            '6\'0"': 10,
            '6\'2"': 15,
            '6\'4"': 20
          }
        },
        {
          id: 8,
          name: 'Wetsuit',
          description:
            'A comfortable and flexible wetsuit for cold water surfing',
          price: 299.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Surf',
          brand: 'Xcel',
          sku: 'XCL-SRF-WS08',
          inventory: {
            S: 10,
            M: 15,
            L: 20,
            XL: 5
          }
        },
        {
          id: 9,
          name: 'Surfboard Leash',
          description: 'A strong and durable leash for surfboards',
          price: 29.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Surf',
          brand: 'FCS',
          sku: 'FCS-SRF-SL09',
          inventory: {
            "6'": 20,
            "7'": 15,
            "8'": 10,
            "9'": 5
          }
        },
        {
          id: 10,
          name: 'Surfboard Fins',
          description: 'A set of 3 fins for surfboards',
          price: 49.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Surf',
          brand: 'FCS',
          sku: 'FCS-SRF-SF10',
          inventory: {
            '5\'10"': 10,
            '6\'0"': 15,
            '6\'2"': 20,
            '6\'4"': 5
          }
        },
        {
          id: 11,
          name: 'Surfboard Wax',
          description: 'A bar of wax for surfboards',
          price: 9.99,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          category: 'Surf',
          brand: 'FCS',
          sku: 'FCS-SRF-SW11',
          inventory: {
            '5\'10"': 15,
            '6\'0"': 20,
            '6\'2"': 5,
            '6\'4"': 10
          }
        },
      ])
    )
  })
]
