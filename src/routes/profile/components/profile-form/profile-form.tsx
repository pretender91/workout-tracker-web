import {
  Avatar,
  Button,
  Card,
  FileButton,
  Flex,
  TextInput,
  Title,
} from '@mantine/core'
import { useProfileForm } from './use-profile-form'

export function ProfileForm(props: { onClick?: () => void }) {
  const { imagePreview, form, handleChangeAvatar, submit } = useProfileForm()

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
    props.onClick?.()
  }

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <Flex direction={'column'} gap={20}>
          <Title order={6}>General</Title>

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
          <Button onClick={props.onClick}>Cancel</Button>
        </Flex>
      </form>
    </Card>
  )
}
