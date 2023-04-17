import React, { useEffect, useState } from 'react'
import { IButton } from './types'
import { ButtonContainer } from './styles'

export const Button: React.FC<IButton> = (props) => {
  const {
    text,
    variation = 'primary',
    onClick = () => {},
    isDisabled = false
  } = props

  const handleButtonClick = () => onClick()

  return (
    <ButtonContainer>
      <button
        type='button'
        className={`button button--${variation}`}
        onClick={handleButtonClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </ButtonContainer>
  )
}
