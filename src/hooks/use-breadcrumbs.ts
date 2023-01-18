import { useState } from 'react'

export function useBreadCrumbs() {
  const [showBreadcrumbs, setShowBreadcrumbs] = useState(false)

  function handleShowBreadcrumbs() {
    setShowBreadcrumbs(true)
  }

  function handleHideBreadcrumbs() {
    setShowBreadcrumbs(false)
  }

  return {
    showBreadcrumbs,
    handleHideBreadcrumbs,
    handleShowBreadcrumbs,
  }
}
