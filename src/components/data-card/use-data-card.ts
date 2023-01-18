import { useState } from 'react'

export function useDataCard() {
  const [isOpened, setIsOpened] = useState(false)

  function openDataCard() {
    setIsOpened(true)
  }

  function closeDataCard() {
    setIsOpened(false)
  }

  return {
    isOpened,
    openDataCard,
    closeDataCard,
  }
}
