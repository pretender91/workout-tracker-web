import { createClient } from 'urql'

export const graphqlClient = createClient({
  url: `${window.location.origin}/graphql`,
})
