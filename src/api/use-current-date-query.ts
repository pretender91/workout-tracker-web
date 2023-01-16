import { graphql } from 'src/graphql-schema'
import { useQuery } from 'urql'

const CurrentDateQuery = graphql(/* GraphQL */ `
  query CurrentDateQuery {
    currentDate
  }
`)

export function useCurrentDateQuery() {
  const [result] = useQuery({
    query: CurrentDateQuery,
  })

  return result
}
