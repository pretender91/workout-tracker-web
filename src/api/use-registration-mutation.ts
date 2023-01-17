import { graphql } from 'src/graphql-schema'
import { useMutation } from 'urql'

const RegisterUserMutation = graphql(/* GraphQL */ `
  mutation RegisterUser($username: Username!, $password: Password!) {
    registerUser(password: $password, username: $username) {
      user {
        __typename
        id
        username
        createdAt
      }
      session {
        __typename
        id
        token
        createdAt
        userId
      }
    }
  }
`)

export function useRegisterUser() {
  const [result, executeMutation] = useMutation(RegisterUserMutation)

  return {
    result,
    executeMutation,
  }
}
