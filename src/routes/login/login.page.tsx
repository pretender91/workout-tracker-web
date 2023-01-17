import {
  Button,
  Container,
  Divider,
  Group,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'
import { useUnauthRoute } from 'src/hooks/use-unauth-route'
import { useRouter } from 'src/router'
import useLogin from './use-login'

export function LoginPage() {
  useUnauthRoute()

  const router = useRouter()
  const { form, submit } = useLogin()

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    submit()()
  }
  return (
    <Container
      style={{
        maxWidth: 450,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 30,
      }}
    >
      <Title order={1}>Log in</Title>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <TextInput
          placeholder="Username"
          {...form.getInputProps('username')}
          h={65}
        />

        <PasswordInput
          placeholder="Password"
          {...form.getInputProps('password')}
          h={65}
        />

        <Group position="center" mt="xs" spacing={2}>
          <Button type="submit" fullWidth>
            Log in
          </Button>
          <Divider w={'100%'} my="xs" label="or" labelPosition="center" />
          <Button
            component="a"
            {...router.routes.registration().link}
            fullWidth
          >
            Register
          </Button>
        </Group>
      </form>
    </Container>
  )
}
