import { AppShell } from 'src/components/app-shell/app-shell'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import ProfileCard from './components/profile-card/profile-card'

export function SettingsPage() {
  useAuthRoute()

  return (
    <AppShell title={'Settings'}>
      <ProfileCard />
    </AppShell>
  )
}
