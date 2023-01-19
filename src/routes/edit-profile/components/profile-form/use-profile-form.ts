import { useForm } from '@mantine/form'
import { useRef, useState } from 'react'
import { useAuthStore } from 'src/stores/auth-store'

type FromValues = {
  username: string
  avatar: string | File
}

export function useProfileForm() {
  const hasSubmitted = useRef(false)

  const user = useAuthStore((state) => state.session?.user)
  const form = useForm<FromValues>({
    initialValues: {
      username: user?.username ?? '',
      avatar: 'U',
    },
  })

  const [imagePreview, setImagePerview] = useState<string>('')

  function handleChangeAvatar(file: File) {
    if (!file) {
      return
    }
    const imagePreview = file instanceof File ? URL.createObjectURL(file) : ''

    form.setFieldValue('avatar', file)
    setImagePerview(imagePreview)
  }

  async function handleUpdate(values: FromValues) {
    console.log(values)
  }

  function submit() {
    return () => {
      hasSubmitted.current = true
      form.onSubmit(handleUpdate)()
    }
  }

  return {
    imagePreview,
    form,
    handleChangeAvatar,
    submit,
  }
}
