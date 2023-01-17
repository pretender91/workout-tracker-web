import {
  Button,
  Card,
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
        width: '100%',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--main-bg-color)',
      }}
    >
      <Card
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 30,
          width: '100%',
          maxWidth: 450,
          borderRadius: 'var(--border-radius)',
          alignItems: 'center',
        }}
      >
        <Title order={1}>Registration</Title>
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
          <TextInput
            placeholder="Username"
            {...form.getInputProps('username')}
            h={65}
            autoComplete={'username'}
          />

          <PasswordInput
            placeholder="Password"
            autoComplete={'new-password'}
            {...form.getInputProps('password')}
            h={65}
          />

          <Group position="center" mt="xs" spacing={2}>
            <Button type="submit" fullWidth>
              Register
            </Button>
            <Divider w={'100%'} my="xs" label="or" labelPosition="center" />
            <Button
              variant="outline"
              component="a"
              {...router.routes.login().link}
              fullWidth
            >
              Login
            </Button>
          </Group>
        </form>
      </Card>
    </Container>
  )
}
