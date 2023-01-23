import { graphql } from 'src/graphql-schema'
import { useMutation } from 'urql'

const RemoveCurrentSessionMutation = graphql(/* GraphQL */ `
  mutation RemoveCurrentSession {
    removeCurrentSession
  }
`)

function useLogoutMutation() {
  const [result, executeMutation] = useMutation(RemoveCurrentSessionMutation)

  return {
    result,
    executeMutation,
  }
}

export default useLogoutMutation
