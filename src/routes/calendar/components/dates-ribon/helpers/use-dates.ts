import { useMemo } from 'react'

import useYears from './use-years'

function useDates() {
  const years = useYears()

  return useMemo(() => {
    return years
      .map((year) =>
        Array.from({ length: 12 }, (_, month) => {
          const numOfDates = new Date(year, month + 1, 0).getDate()

          return Array.from({ length: numOfDates }, (_, index) => {
            const date = index + 1
            return {
              year,
              month,
              date,
            }
          })
        }),
      )
      .flat(2)
  }, [])
}

export default useDates
