import { Button, Flex } from '@mantine/core'
import { AppShell } from 'src/components/app-shell/app-shell'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import ProfileCard from './components/profile-card/profile-card'

export function SettingsPage() {
  useAuthRoute()

  return (
    <AppShell title={'Settings'}>
      <Flex direction={'column'} justify="space-between" h={'100%'}>
        <ProfileCard />

        <Button
          color={'red'}
          variant={'outline'}
          fullWidth
          onClick={() => {
            console.log('logout')
          }}
        >
          Log out
        </Button>
      </Flex>
    </AppShell>
  )
}
