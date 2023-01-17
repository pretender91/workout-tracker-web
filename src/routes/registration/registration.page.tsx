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
import useRegistration from './use-registration'

export function RegistrationPage() {
  useUnauthRoute()

  const router = useRouter()
  const { form, submit } = useRegistration()

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
      <Title order={1}>Registration</Title>
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
            Register
          </Button>
          <Divider w={'100%'} my="xs" label="or" labelPosition="center" />
          <Button component="a" {...router.routes.login().link} fullWidth>
            Login
          </Button>
        </Group>
      </form>
    </Container>
  )
}
