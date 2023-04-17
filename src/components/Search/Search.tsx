import { useAppContext } from '@/hooks/useAppContext'
import debounce from 'lodash.debounce'
import React, {
  ChangeEvent,
  useCallback,
  useMemo
} from 'react'
import { SearchContainer } from './styles'

export const Search: React.FC = () => {
  const { handleSearchValueChange } = useAppContext()

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    handleSearchValueChange(event.target.value)
  }, [handleSearchValueChange])

  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, 500),
    [handleInputChange]
  )

  return (
    <SearchContainer>
      <div className='search'>
        <input
          placeholder='Search for items...'
          className='search__input'
          type='text'
          onChange={debouncedHandleInputChange}
        />
      </div>
    </SearchContainer>
  )
}
