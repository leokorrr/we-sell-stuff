type ButtonVariations = 'primary' | 'secondary'

export interface IButton {
  text: string
  variation?: ButtonVariations
  onClick?: <T,>(param?: T) => void
  isDisabled?: boolean
}