import React from 'react'
import { CostsContainer } from './styles'
import { useAppContext } from '@/hooks/useAppContext'

export const Costs: React.FC = () => {
  const { subtotalPrice } = useAppContext()

  const costs = [
    {
      label: 'Subtotal',
      isActive: true,
      value: `$${subtotalPrice}`
    },
    {
      label: 'Shipping',
      isActive: false,
      value: 'Calculated at the next step'
    },
    {
      label: 'Total',
      isActive: true,
      value: `$${subtotalPrice}`
    }
  ]

  return (
    <CostsContainer>
      <div className='costs'>
        {costs.map((item) => (
          <div key={item.label} className='costs__cost'>
            <div>{item.label}</div>
            <div className={`${!item.isActive ? 'grey' : ''}`}>{item.value}</div>
          </div>
        ))}
      </div>
    </CostsContainer>
  )
}
