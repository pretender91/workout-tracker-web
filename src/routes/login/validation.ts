import { hasLength, isNotEmpty, matches } from '@mantine/form'

export function userNameValidation(value: string, hasSubmitted: boolean) {
  if (!hasSubmitted) {
    return null
  }
  if (isNotEmpty()(value)) {
    return 'Enter username'
  }
  if (matches(/[a-zA-z1-9_]/)(value)) {
    return 'Invalid username'
  }

  if (hasLength({ min: 1, max: 15 })(value)) {
    return 'Username length should be between 1 and 15 characters'
  }
  return null
}

export function passwordValidation(value: string, hasSubmitted: boolean) {
  if (!hasSubmitted) {
    return null
  }
  if (isNotEmpty()(value)) {
    return 'Enter password'
  }
  if (hasLength({ min: 8, max: 64 })(value)) {
    return 'Password length should be between 8 and 64 characters'
  }

  return null
}
