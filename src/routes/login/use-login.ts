import { useForm } from '@mantine/form'
import { useRef } from 'react'
import { useCreateSession } from 'src/api/use-create-session'
import { useRouter } from 'src/router'
import { useAuthStore } from 'src/stores/auth-store'
import { passwordValidation, userNameValidation } from './validation'

type FormValues = {
  username: string
  password: string
}

function useLogin() {
  const hasSubmitted = useRef(false)

  const router = useRouter()

  const { executeMutation } = useCreateSession()
  const auth = useAuthStore()

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

  async function handleLogin(values: { username: string; password: string }) {
    const result = await executeMutation(values)

    if (result.error) {
      //TODO parse errors from server
      form.setFieldError('username', 'Wrong credentials')
      return
    }
    if (result.data) {
      const { user, ...session } = result.data.createSession
      auth.login(session, user)
      router.routes.main().push()
    }

    return
  }

  function submit() {
    return () => {
      hasSubmitted.current = true
      form.onSubmit(handleLogin)()
    }
  }

  return {
    submit,
    form,
  }
}

export default useLogin
