import { useForm } from '@mantine/form'
import { useRef } from 'react'
import { useCreateUserMutation } from 'src/api/use-create-user-mutation'
import { useRouter } from 'src/router'
import { passwordValidation, userNameValidation } from './validation'

type FormValues = {
  username: string
  password: string
}

function useRegistration() {
  const hasSubmitted = useRef(false)
  const router = useRouter()

  const { executeMutation } = useCreateUserMutation()

  const form = useForm<FormValues>({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) => userNameValidation(value, hasSubmitted.current),
      password: (value) => passwordValidation(value, hasSubmitted.current),
    },
    validateInputOnChange: true,
  })

  async function handleRegistration(values: {
    username: string
    password: string
  }) {
    const result = await executeMutation(values)

    if (result.error) {
      //TODO parse errors from server
      form.setFieldError('username', 'Username already taken')
      return
    }

    router.routes.login().push()
    return
  }

  function submit() {
    return () => {
      hasSubmitted.current = true
      form.onSubmit(handleRegistration)()
    }
  }

  return {
    submit,
    form,
  }
}

export default useRegistration
