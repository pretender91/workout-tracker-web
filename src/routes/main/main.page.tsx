import { useCurrentDateQuery } from 'src/api/use-current-date-query'

export function MainPage() {
  const currentDateQuery = useCurrentDateQuery()

  if (currentDateQuery.fetching) {
    return <div>Loading...</div>
  }

  if (currentDateQuery.error) {
    return <div>Error: {currentDateQuery.error.message}</div>
  }

  return <div>Main Page. CurrentDate: {currentDateQuery.data?.currentDate}</div>
}
