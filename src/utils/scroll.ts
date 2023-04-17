export const isBrowser = typeof window !== 'undefined'

export const handleScrollLock = () => {
  document.body.style.overflow = 'hidden'
  return true
}

export const handleScrollUnlock = () => {
  document.body.style.overflow = ''
  return false
}
