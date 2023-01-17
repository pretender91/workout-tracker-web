import { AppShell } from 'src/components/app-shell/app-shell'
import { useAuthRoute } from 'src/hooks/use-auth-route'

export function SettingsPage() {
  useAuthRoute()

  return <AppShell title={'Settings'}>Settings page</AppShell>
}
