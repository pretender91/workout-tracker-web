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
        width: '100%',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--main-bg-color)',
      }}
    >
      <Card
        shadow={'sm'}
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
        <Title order={1}>Log in</Title>
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
          <TextInput
            placeholder="Username"
            {...form.getInputProps('username')}
            h={65}
            autoComplete={'username'}
          />

          <PasswordInput
            placeholder="Password"
            {...form.getInputProps('password')}
            h={65}
            autoComplete={'current-password'}
          />

          <Group position="center" mt="xs" spacing={2}>
            <Button type="submit" fullWidth>
              Log in
            </Button>
            <Divider w={'100%'} my="xs" label="or" labelPosition="center" />
            <Button
              component="a"
              variant="outline"
              {...router.routes.registration().link}
              fullWidth
            >
              Register
            </Button>
          </Group>
        </form>
      </Card>
    </Container>
  )
}
