import { graphql } from 'src/graphql-schema'
import { useMutation } from 'urql'

const CreateUserMutation = graphql(/* GraphQL */ `
  mutation RegistrationMutation($username: Username!, $password: Password!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`)

export function useCreateUserMutation() {
  const [result, executeMutation] = useMutation(CreateUserMutation)

  return {
    result,
    executeMutation,
  }
}
