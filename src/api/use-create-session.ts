import { graphql } from 'src/graphql-schema'
import { useMutation } from 'urql'

const CreateSessionMutation = graphql(/* GraphQL */ `
  mutation CreateSession($username: Username!, $password: Password!) {
    createSession(username: $username, password: $password) {
      __typename
      id
      token
      createdAt
      userId
      user {
        __typename
        id
        username
        createdAt
      }
    }
  }
`)

export function useCreateSession() {
  const [result, executeMutation] = useMutation(CreateSessionMutation)

  return {
    result,
    executeMutation,
  }
}
