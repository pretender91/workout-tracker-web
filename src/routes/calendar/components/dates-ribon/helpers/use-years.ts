import { useMemo } from 'react'

function useYears() {
  return useMemo(() => {
    const today = new Date()
    const currentYear = today.getFullYear()
    const start = currentYear - 5
    const end = currentYear + 1

    const years = []
    for (let year = start; year <= end; year++) {
      years.push(year)
    }

    return years
  }, [])
}

export default useYears
