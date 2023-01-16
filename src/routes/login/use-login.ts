import { useForm } from '@mantine/form'
import { useRef } from 'react'
import { passwordValidation, userNameValidation } from './validation'

type FormValues = {
  username: string
  password: string
}

function useLogin() {
  const hasSubmitted = useRef(false)

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

  function submit() {
    return () => {
      hasSubmitted.current = true
      form.onSubmit((values) => {
        console.log(values)
      })()
    }
  }

  return {
    submit,
    form,
  }
}

export default useLogin
