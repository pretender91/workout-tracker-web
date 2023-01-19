import {
  Avatar,
  Button,
  Card,
  FileButton,
  Flex,
  TextInput,
  Transition,
} from '@mantine/core'
import useMounted from 'src/hooks/use-mounted'
import { useRouter } from 'src/router'
import { useProfileForm } from './use-profile-form'

export function ProfileForm() {
  const { imagePreview, form, handleChangeAvatar, submit } = useProfileForm()
  const router = useRouter()
  const mounted = useMounted()

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
  }

  return (
    <Transition mounted={mounted} transition="slide-left" duration={150}>
      {(styles) => (
        <Card style={styles}>
          <form onSubmit={onSubmit}>
            <Flex direction={'column'} gap={20}>
              <FileButton
                onChange={handleChangeAvatar}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Avatar
                    {...props}
                    variant="filled"
                    radius={'xl'}
                    size="lg"
                    style={{ cursor: 'pointer', alignSelf: 'center' }}
                    src={imagePreview}
                  >
                    {typeof form.values.avatar === 'string'
                      ? form.values.avatar
                      : 'U'}
                  </Avatar>
                )}
              </FileButton>

              <TextInput
                placeholder="Username"
                {...form.getInputProps('username')}
                style={{ width: '100%' }}
              />

              <Button type="submit">Save changes</Button>
              <Button component="a" {...router.routes.settings().link}>
                Cancel
              </Button>
            </Flex>
          </form>
        </Card>
      )}
    </Transition>
  )
}
