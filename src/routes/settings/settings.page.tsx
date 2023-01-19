import { Anchor } from '@mantine/core'
import { AppShell } from 'src/components/app-shell/app-shell'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import { useRouter } from 'src/router'

export function SettingsPage() {
  useAuthRoute()

  const router = useRouter()

  return (
    <AppShell title={'Settings'}>
      <Anchor {...router.routes.profile().link}>Profile</Anchor>
    </AppShell>
  )
}
