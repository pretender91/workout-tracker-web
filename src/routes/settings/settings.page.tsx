import { Flex } from '@mantine/core'
import { AppShell } from 'src/components/app-shell/app-shell'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import LogoutButton from './components/logout-button/logout-button'
import ProfileCard from './components/profile-card/profile-card'

export function SettingsPage() {
  useAuthRoute()

  return (
    <AppShell title={'Settings'}>
      <Flex direction={'column'} justify="space-between" h={'100%'}>
        <ProfileCard />

        <LogoutButton />
      </Flex>
    </AppShell>
  )
}
